# Server-Side Testing with Express, Supertest, and Knex

Starter repo for Express API server with mocha and chai testing

## Setup

To install dependencies, run:

```bash
npm install
```

To create your db's:

```bash
psql

# then

CREATE DATABASE school;
CREATE DATABASE school_test;
\q
```

Then seed your db's:  
knex seed:run  
knex seed:run --env=test

## Run the Server

To start the server, run:

```bash
node server.js
```

Or use `nodemon` to run the server if you have nodemon installed globally.
