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

# Using Postgres Shell
1. Connect to the postgres service and open the psql shell: `sudo -u postgres psql`
    1. If this fails, you should check the status of the postgres service and if it's not running, start it.
    1. Note that the `-u` flag on the sudo command tells it to do something as the user specified as the argument rather than as a super user / root
1. To exit the shell `postgres=#` enter: `\q` or use the shortcut key: `Ctrl+D`