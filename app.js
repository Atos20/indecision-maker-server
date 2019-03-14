const express = require('express');
const app = express();

app.locals.title = 'Test Express';

app.get('/', (request, response) => {
  response.send('We\'re going to test all the routes!');
});

module.exports = app
