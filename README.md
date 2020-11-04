## FitLit Group Project

**Contributors**

[Blake Donnelly](https://github.com/BlakeDonn), [Nicole Gooden](https://github.com/nicolegooden), [Orlando MMurcio](https://github.com/Atos20)

**Project Description**

* The backend companion for the [indecision-maker](https://github.com/nicolegooden/indecision-maker) application, built with Knex, Express, and PostgreSQL *

**Installation**

**Fork this repository:**

* https://github.com/BlakeDonn/fitlit-starter-kit

**Clone your forked repository**

* `git clone` and the copied URL

**Change into the directory and install the project dependencies**

* `cd` into directory and run `npm install` for dependencies

**Install PostgreSQL globally and set up local database**

* In terminal command line run the following commands:
* PostgreSQL gloal install: `brew install postgres` 
* Start local database: `pg_ctl -D /usr/local/var/postgres start`
* Run: `psql postgres`
* Should now be at the PostgreSQL CLI...
* postgres=# `CREATE DATABASE indecision`
* Your local database should now be hooked up with our pre-configured files

**Initial Migrations and Seeding**

* Knex handles all migrations and seeding through CLI inputs
* The following commands will populate the database our pre-configured tables and data 

* `Knex migrate:latest` will build the tables we have pre-configured
* `Knex migrate:seed` run will run all seed files to populate tables with data
* An API key must be provided to seed the movie data files, found [here](https://rapidapi.com/blog/lp/imdb-api/)

**Helpful Tips for Knex**


* [Knex Cheatsheet](https://devhints.io/knex)
* Knex migrate:rollback will roll back to the previous batch and remove all tables + data for that batch

**Project Goals**

* Create a functioning app by following the spec below
* Using ES6 create classes that communicate with each other
* Write clean code that follows the Single Responsibility Principle
* Build a strong testing suite using TDD
* Manipulate data with object and array prototype methods
* Dsplay user data on a dashboard that presents  information in a clear way

**Wins**

* Working with JS in a collaborative environment with a set deadline.
* Have a fully functioning and displaying app.
* Several rounds of refactoring in order to keep code as clean as possible.

**Challenges**

* Mastering the GitHub workflow with many branches and multiple team members.
* Creating sad path tests for an application without any user inputs.
* Getting all of the parts to display in a user friendly way on the dashboard.


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
