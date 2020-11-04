## Indecision Maker Backend 

### Installation

* Clone this / forked repository
* Follow the below steps for initial configuration

**Install PostgreSQL globally and set up local database**

* In terminal command line run the following commands:
* PostgreSQL global install: `brew install postgres` 
* Start local database: `pg_ctl -D /usr/local/var/postgres start`
* Run: `psql postgres`
* *Should now be at the PostgreSQL CLI...*
* postgres=# `CREATE DATABASE indecision`
* Your local database should now be hooked up with our pre-configured files

**Initial Migrations and Seeding**

* Knex handles all migrations and seeding through CLI inputs
* The following commands will populate the database with our pre-configured tables and data 
* An API key must be provided to seed the movie data files, get one [here](https://rapidapi.com/blog/lp/imdb-api/)
* `Knex migrate:latest` will build the tables we have pre-configured
* `Knex seed:run`  will run all seed files to populate tables with data

---

**Helpful Tips**

* Make sure to keep your api key secure by utilizing a `.env` file (possible with [dotenv](https://www.npmjs.com/package/dotenv))
* Setting the API key to `IMDB_API_KEY` environmental variable will hook it up to our current config
* Changes made to migration files in knex will require a `knex migrate:rollback` and `knex migrate:latest`


---

**Contributors**

[Blake Donnelly](https://github.com/BlakeDonn), [Nicole Gooden](https://github.com/nicolegooden), [Orlando MMurcio](https://github.com/Atos20)

**Project Description**

* The backend companion for the [indecision-maker](https://github.com/nicolegooden/indecision-maker) application, built with Knex, Express, and PostgreSQL *
 
**Programming Languages Used**
* HTML
* CSS
* JavaScript

**Other Important Features Implemented**

* Creating graphs to display data in an organized user friendly way.

## Comps Given

![Dashboard View](https://static1.fitbit.com/simple.b-cssdisabled-png.h7c5d2beb7af823f15fe022b8ff33daf8.pack?items=%2Fcontent%2Fassets%2Fapp2%2Fimages%2Fmacbook-pro.png)

## In Action

**Fitness Dashboard**

![project page load](https://i.imgur.com/oIX4rKd.gif)

 **Issues to be Resolved**

 * When executing the final 5 functions of the Activity-test.js test suite, be sure to follow the instructions presented.These instructions aim to emulate script-linking as it would exist in a real-world scenario.
i

# Server-Side Testing with Express, Jest, Supertest, and Knex

Starter repo for Express API server interacting with a DB, using Jest and
Supertest

## Setup

To install dependencies, run:

```bash
npm install
```

To create your db's (you will need to have postgres installed):

```bash
psql

# then

CREATE DATABASE school;
CREATE DATABASE school_test;
\q
```

Run the migrations for your new DB's:
```
knex migrate:latest
knex migrate:latest --env=test
```

Then seed your db's:

```bash
knex seed:run  
knex seed:run --env=test
```

## Run the Server

To start the server, run:

```bash
npm start
```
