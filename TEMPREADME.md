- yarn/npm install
- npm i --save-dev ts-node
- modify scripts to ts-node insteqade of node
- modify script single quate to slach and double questes in script 
- modify the database as follows

```sh
# To reach to database
psql -U postgres
# Create the essential database
postgres=# CREATE DATABASE project_db;
CREATE DATABASE
# Create the testing database
postgres=# CREATE DATABASE project_t;  
CREATE DATABASE
# Create the user
postgres=# CREATE USER project_user WITH PASSWORD 'pass';
CREATE ROLE
# add & link and add permission to the user to the database
postgres=# GRANT ALL PRIVILEGES ON DATABASE project_t TO project_user;
GRANT
# add & link and add permission to the user to the testing database
postgres=# GRANT ALL PRIVILEGES ON DATABASE project_db TO project_user; 
GRANT
# all this user to make insertion to the tables
postgres=# GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO project_user;    
GRANT
postgres=#\q
```

- craete .env and adding the following lines to it
```sh
# DATABASE
HOSTING=localhost
PORT=3000
DATABASE_PORT=3306
DATABASE_TEST=project_t
DATABASE_NAME=project_db
DATABASE_USER=project_user
DATABASE_PASSWORD=pass
# Mode
ENV=develope_mode
# JWT
JWT_SECRET_KEY=JWT_SECRET_KEY
# pepper and salt
SALT_ROUNDS_COUNT=10
PEPPER_KEY=peppersecret
```
- create database json for every mode where it is used as configuration file that is used by the db-migrate packages to connect with the database and migrate while .env convey all private info that is used by developer himself intintianally
```sh
{
    "dev": {
      "driver": "pg",
      "user": "project_user",
      "password": "pass",
      "host": "localhost",
      "database": "project_db"
    },
    "test": {
        "driver": "pg",
        "user": "project_user",
        "password": "pass",
        "host": "localhost",
        "database": "project_t"
    }
  }
  ```
- install dotenv
```sh
npm i dotenv
```
- create database file requiring pool from pg and dotenv from dotenv and instaanisaite its configuration for pool from rnv 
- make folders handlers helpers models
- install db-migrate db-migrate-pg
```sh
npm i db-migrate -g
npm i db-migrate-pg
```
- create models for every table as requiremnts using db-migrate create
```sh
db-migrate create users-table --sql-file
db-migrate create products-table --sql-file
db-migrate create orders-table --sql-file
db-migrate create order_products-table --sql-file
```
- create the up and down files in migration for every table as required
- make migration
```sh
db-migrate up
```
- install httpie for testing apis with postman
```sh
npm i httpie --save-dev
```

- from extensions install thunder client for http verbs requests
- made trais in helper make the function contains db.connect and sql and release to reduce repeatation
- i want to modifiy the table to useuuid insread of serial so i make 
i changed the table file to use uuid
```sh
db-migrate reset
db-migrate up 
```
- make function hashingKey in traits to be used widley
- to allow usinhg bcrypt we have to install it first to allaow use of hashsync and comparesync to check it issame hashed key
```sh
npm i bcrypt
npm i --save-dev @types/bcrypt
```
- time to install  jsonwebtoken to generate token tha will be used in api like session to give authentication by sig method first to generate token while verify method is used to validate 
```sh
 npm i jsonwebtoken
 npm i --save-dev @types/jsonwebtoken
 ```
add this installation for format and syntax errro 
```sh
npm i --save-dev prettier
npm i --save-dev eslint
```
and add next script
```sh
 "prettier": "prettier --write src/**/*.{ts,tsx,js,jsx}",
    "lint": "eslint . --ext .ts"
```

- add suppertest to test requests
```sh
npm i --save-dev supertest
npm i --save-dev @types/supertest
```
