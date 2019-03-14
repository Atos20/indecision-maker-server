const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.locals.title = 'Test Express';

app.use(bodyParser.json())

app.get('/', (request, response) => {
  response.send('We\'re going to test all the routes!');
});

module.exports = app
