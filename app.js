const express = require('express');
const cors = require('cors');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);

app.locals.title = 'Test Express';
app.use(cors());
app.use(express.json());

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

app.get('/api/v1/boardgames', async (req, res) => {
  try {
    const boardGames = await database('board_games').select();
    res.status(200).json(boardGames);
  } catch(e) {
    res.status(500).json({e})
  }
})

app.get('/api/v1/cardgames', async (req, res) => {
  try {
    const cardGames = await database('card_games').select();
    res.status(200).json(cardGames);
  } catch(e) {
    res.status(500).json({e})
  }
})

app.get('/api/v1/music', async (req, res) => {
  try {
    const music = await database('music').select();
    res.status(200).json(music);
  } catch(e) {
    res.status(500).json({e})
  }
})

app.get('/api/v1/music/:genre', async (req, res) => {
  try {
    const music = await database('music').where('genre', `${req.params.genre}`).select();
    if (music.length) {
      res.status(200).json(music);
    } else {
      res.status(404).json({
        error: `No music found with a genre of ${ req.params.genre }`
      })
    }
  } catch(e) {
    res.status(500).json({e})
  }
})

app.get('/api/v1/podcasts', async (req, res) => {
  try {
    const podcasts = await database('podcasts').select();
    res.status(200).json(podcasts);
  } catch(e) {
    res.status(500).json({e})
  }
})

app.get('/api/v1/podcasts/:genre', async (req, res) => {
  try {
    const podcasts = await database('podcasts').where('genre', 'ilike', `%${req.params.genre}%`).select();
    if (podcasts.length) {
      res.status(200).json(podcasts);
    } else {
      res.status(404).json({
        error: `No podcasts found with a genre of ${ req.params.genre }`
      })
    }
  } catch(e) {
    res.status(500).json({e})
  }
})

module.exports = app;