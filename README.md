## Indecision Maker Backend 

### Installation

---
**Install PostgreSQL globally and set up local database:**

* In terminal command line run the following commands:
* PostgreSQL global install: `brew install postgres` 
* Start local database: `pg_ctl -D /usr/local/var/postgres start`
* Run: `psql postgres`
* *Should now be at the PostgreSQL CLI...*
* postgres=# `CREATE DATABASE indecision`
* Your local database should now be hooked up with our pre-configured files

**Initial Migrations and Seeding:**

* Knex handles all migrations and seeding through CLI inputs
* The following commands will populate the database with our pre-configured tables and data 
* An API key must be provided to seed the movie data files, get one [here](https://rapidapi.com/blog/lp/imdb-api/)
* `Knex migrate:latest` will build the tables we have pre-configured
* `Knex seed:run`  will run all seed files to populate tables with data

**Final Steps:**

* `npm test` to test database/endpoint functionality
* `npm start` to start making your very own endpoint calls

**Optional Deployment**

* Create heroku account
* Install heroku : `brew tap heroku/brew` && brew install heroku
* Login heroku `heroku login`
* Add Procfile (in root directory, no .js or .txt just Procfile)
* Create app: `heroku app_name`
* Check that origin is updated `git remote -v` should display both heroku and git
* Deploy to heroku `git push heroku main`
* Check app: `heroku open`
* Migrate production database `heroku run 'knex migrate:latest'`

---

### Helpful Tips

---
**Knex Quirks:**

* Syntax [cheatsheet](https://devhints.io/knex)

* Changes made to database files in Knex will require a few steps to avoid corruption:
  * `knex migrate:rollback` and `knex migrate:latest` to delete / rebuild tables 

  * `knex seed:run` to re-populate the data in the tables


* Helpful syntax to avoid migrating/seeding all files:
  * Seed specific file: `knex seed:run --specific=seed_name.js`

  * Migrate specific file down: `knex migrate:down 20201102155115_migration_name.js`
  
  * Migrate specific file up: `knex migrate:up 20201102155115_migration_name.js`


**API Key:** 

* Make sure to keep your api key secure by utilizing a `.env` file (possible with [dotenv](https://www.npmjs.com/package/dotenv))
* Setting the API key to `IMDB_API_KEY` environmental variable will hook it up to our current config
* The default key provided by the above link is limited to 500 free calls


---

### Contributors / Project Details


---

[Blake Donnelly](https://github.com/BlakeDonn), [Nicole Gooden](https://github.com/nicolegooden), [Orlando MMurcio](https://github.com/Atos20)

**Project Description**

* The backend companion for the [indecision-maker](https://github.com/nicolegooden/indecision-maker) application, built with Knex, Express, and PostgreSQL 

**Data Stored / Purpose**

* This database is meant to provide enough information to filter a unique random activity for a user

  * Family Movies by genre seeded from [IMDB API](https://rapidapi.com/blog/lp/imdb-api/)
  * Family Board games seeded from [Board Game Atlas](https://www.boardgameatlas.com/api/docs)
  * Music seeded from [Itunes API](https://www.boardgameatlas.com/api/docs)
  * Podcasts seeded from [Itunes API](https://www.boardgameatlas.com/api/docs)
  * Card games seeded from developer generated research (our dataset)
  * Question set for user to answer to randomize generated activity
___

