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

## Create demo data
We want code we can use to test the system so we're going to write a script that clears out the existing state of the DB and restores a few games and users.
    
## DB schema
```
DROP TABLE public.game;

CREATE TABLE public.game (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	"name" varchar NOT NULL,
	status varchar NOT NULL,
	seat_count int4 NOT NULL,
	CONSTRAINT game_pk PRIMARY KEY (id)
);


DROP TABLE public."user";

CREATE TABLE public."user" (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	"name" varchar NOT NULL,
	salt varchar NOT NULL,
	passhash varchar NOT NULL,
	CONSTRAINT user_pk PRIMARY KEY (id)
);


DROP TABLE public.player;

CREATE TABLE public.player (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	game_id int4 NOT NULL,
	user_id int4 NOT NULL,
	seat_index int4 NOT NULL,
	is_active bool NOT NULL,
	CONSTRAINT player_pk PRIMARY KEY (id),
	CONSTRAINT player_game_fk FOREIGN KEY (game_id) REFERENCES public.game(id),
	CONSTRAINT player_user_fk FOREIGN KEY (user_id) REFERENCES public."user"(id)
);


DROP TABLE public.card;

CREATE TABLE public.card (
	id int4 NOT NULL GENERATED BY DEFAULT AS IDENTITY,
	game_id int4 NOT NULL,
	"index" int4 NOT NULL,
	value varchar NOT NULL,
	cardholder_id int4 NOT NULL,
	is_discard bool NOT NULL,
	CONSTRAINT card_pk PRIMARY KEY (id),
	CONSTRAINT cardholder_fk FOREIGN KEY (cardholder_id) REFERENCES public.player(id),
	CONSTRAINT deck_game_fk FOREIGN KEY (game_id) REFERENCES public.game(id)
);
```