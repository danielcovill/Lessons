# Installing and Running Postgres
1. Install postgress sql on your WSL instance `sudo apt-get install postgresql`
1. There are 3 commands you need to know once PostgreSQL is installed:
`sudo service postgresql status` for checking the status of your database.
`sudo service postgresql start` to start running your database.
`sudo service postgresql stop` to stop running your database.
1. Run the postgres server using `sudo service postgresql start`
1. The default admin user, postgres, needs a password assigned in order to connect to a database. To set a password use the command: `sudo passwd postgres`
    1. My password is `23pg;`
    1. After changing the password, you need to log out and into the terminal for the change to take affect

# Using Postgres
1. Connect to the postgres service and open the psql shell: `sudo -u postgres psql`
    1. If this fails, you should check the status of the postgres service and if it's not running, start it.
    1. Note that the `-u` flag on the sudo command tells it to do something as the user specified as the argument rather than as a super user / root
    1. To exit the shell `postgres=#` enter: `\q` or use the shortcut key: `Ctrl+D`
1. Next we want to add a database user to postgres that isn't this admin so we can connect to the DB with more limited permissions. To do this we need to execute the following commands:
`su - postgres` - This command launches a shell inside the shell as the Postgres user we've created. We'll need to provide the postgres user password from above
`createuser --interactive --pwprompt` - This command creates a user, we'll want to make sure we take close note of the password we use. We'll want to give the user somewhat limited access so only say "yes" to the create tables prompt. I named the user `unoApi` and gave it the password `unoDbPass1`
1. We should now be able to use this user we created to connect to our running Postgres instance using `localhost` as the host, `5432` as the port, and `postgres` as the database
1. We want to create a database for our project using DBeaver. We'll call it `Uno` and will set the TableSpace to `Default` to avoid permissions errors and the owner to `unoApi`
    1. Note that you might need to update your dbeaver connection settings next time you connect by going to "Connection Settings > PostgresQL tab" and selecting the "show all databases" checkbox. Once you reconnect and refresh, you'll see the `Uno` database which you can right click and set as default for ease of use.

# Building the DB for the game
We need a database to store the data for the game we're going to build. Having built out the API docs, we should have a pretty good idea of what we're going to need to keep track of:
* Games
* Decks
* Players
* Hands

To keep track of all this we're going to need tables, and those tables will need columns. Create the first table:
* We'll name the table: game
    * We're using a singular name because that's a generally accepted standard for DB naming of tables. There are lots of reasons but some can be found [here](https://stackoverflow.com/questions/338156/table-naming-dilemma-singular-vs-plural-names)
    * We're naming using lowercase because Postgres generally uses lower_case_underscore_separated_identifiers to avoid having to put "quotes" around all the names of things when writing queries
* We'll add the following columns
    * id (again lowercase)
        * datatype: int (we like using numbers for identity columns because they're efficient)
        * Identity: by default (we want the identities automatically assigned)
        * Not Null: True (identity columns should never be null, they're the primary identifier for row uniqueness, though there will often be others)
    * name
        datatype: varchar
        not null: true
    * status
        datatype: varchar
        not null: true
* Once the above is saved/persisted, we'll need to define the "id" column as the primary key. To do this, right click the "id" column and select "New constraint from selection". This brings up a menu where you can check the "id" column and set it as a primary key.
* Note that we're not adding the deck, discard pile, or players. Those are represented as separate tables with relationships.
* After this we add the "deck" table 
    * id - int
    * game_id - int
    * card_position - int
    * card_value - varchar
* Make sure to set the id column here as a primary key as you did with game
* Now we need to create a foreign key relationship between deck.game_id and game.id. 
    * Open the deck table and open the "foreign keys" tab.
    * Right click and select "Create New Foreign Key"
    * Select "game" as the reference table and set the column in the bottom half to game_id
    * Leave everything else as-is, click "ok" and persist the changes
* Create the remaining tables
* Using the "Create DDL" option that shows up when you right click tables, generate a script for the creation of the database and save it to your project

# Using the DB in the codebase
* `npm install pg`
    * Gets you [this package](https://www.npmjs.com/package/pg)
    * [Documentation](https://node-postgres.com/)
* Set up your `.env` file which must contain all the login credentials for your database (the unoApi user from above)
* Require your database configuration file in the places you'll need to connect to the db. This gives your db connection access to the variables you set in the .env file which should contain all the necessary login information
    * `const config = require('../../config/components/database.config');`
* Require the `pg` package in the place you'll be using the DB.
    `const { Pool } = require('pg');`
* Pools vs Clients 
    * From the [connectiong](https://node-postgres.com/features/connecting) page in the documentation, it's a bit unclear which to use.
    * Use a pool if you have or expect to have multiple concurrent requests. A pool provides a collection of re-usable open client instances which reduces latency. This is because re-using a client reduces the time needed to set up and tear down a connection whenever a call needs to be made.
    * In our case, we'll be using a pool rather than a client each time 

## Writing the code to consume the DB
The first method we'll write is the one to pull a single game by it's gameId.

### Validation
We're going to need to validate our inputs so we don't send garbage requests to the DB and return 500 errors. We want to catch bad inputs and return proper 400 responses. To do this, we just need to check that the input is a number since that's a valid input for the DB query. If the input is valid, we'll continue, if not we just set the status and body and return.
```
if(isNaN(gameId)) {
    ctx.status = 400;
    ctx.body = "gameId is invalid";
    return;
}
```

### Query
```
    const queryString = 'SELECT * FROM game WHERE id=$1';
    const vars = [ gameId ];
    const response = await pool.query(queryString, vars);
    ctx.assert(response.rowCount === 1, 404, "The requested game doesn't exist");
    ctx.status = 200;
    ctx.body = response.rows[0];
```
The querystring contains one or many parameters. The reason we don't just put these right in the string is that it makes us susceptible to SQL injection attacks. Instead we hand the queryString and the parameters to the `pool.query` method. We let that method handle escaping any nastiness that makes it into the parameters so the query will work as we'd expect even if a malicious user sends dangerous code in the request.

If you want to see what the response object looks like, make the ctx.body line include the entire response and look at it. You'll see it's a large json object with a bunch of different, and useful, values. We're going to use the `rowCount` and the first row `rows[0]` for our purposes, but there might be use for other things later.

The above doesn't actually show what the endpoint should return. Remember that our documentation states what the return object should look like. We'll need to write a better query with some joins and use the resulting data to build and return and appropriate object.

## Create demo data
We want date we can use to test the system so we're going to write a script that clears out the existing state of the DB and restores a few games and users. This will let us actually test things as we write the code. 

This script must be idempotent. This means we can run it as many times as we want and we know the DB will be in the same state. To do this, we must first clear existing data in the system so we can be sure we're starting with an empty DB. Because of the foreign key constraints the tables will need to be cleared in the right order or there will be errors. Foreign key constraints keep us from "orphaning" data.