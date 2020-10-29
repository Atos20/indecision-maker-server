const express = require('express');
const cors = require('cors');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.locals.title = 'Test Express';
app.use(cors());
app.use(express.json());

// All endpoints live here

app.get('/api/v1/movies', async (req, res) => {
  try {
    const movies = await database('movies').select();
    res.status(200).json(movies);
  } catch(e) {
    res.status(500).json({e})
  }
})

app.get('/api/v1/movies/:genre', async (req, res) => {
  try {
    const movies = await database('movies').where('genre', 'ilike', `%${req.params.genre}%`).select();
    if (movies.length) {
      res.status(200).json(movies);
    } else {
      res.status(404).json({
        error: `No movies found with a genre of ${ req.params.genre }`
      })
    }
  } catch(e) {
    res.status(500).json({e})
  }
})

module.exports = app;