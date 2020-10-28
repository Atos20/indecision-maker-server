import "@babel/polyfill";
import request from 'supertest'
import app from './app'

const environment = process.env.NODE_ENV || 'development'
const configuration = require('./knexfile')[environment]
const database = require('knex')(configuration)

describe('Server', () => {
  describe('init', () => {
    it('should return a 200 status', async () => {
      const res = await request(app).get('/')
      expect(res.status).toBe(200)
    });
  });
});

describe('GET /api/v1/movies', () => {
  it('should return a 200 and all of the movies', async () => {
    const expectedMovies = await database('movies').select();
    const response = await request(app).get('/api/v1/movies');
    const movies = response.body;

    expect(response.status).toBe(200);
    expect(movies).toEqual(expectedMovies);
  })
  //create sad path test
})

describe('GET /api/v1/movies/:genre', () => {
  it('should return a 200 and all movies matching a specific genre', async () => {
    const expectedMovies = await database('movies').where('genre', 'action').select();
    const response = await request(app).get('/api/v1/movies/action');
    const result = response.body;

    expect(response.status).toBe(200);
    expect(result).toEqual(expectedMovies);
  })

   it('should return a 404 and the message "No movies found with this genre"', async () => {
    const response = await request(app).get('/api/v1/movies/boring');
    const { error } = response.body

    expect(response.status).toBe(404);
    expect(error).toEqual('No movies found with this genre');
  })
})

describe('GET /api/v1/boardgames', () => {
  it('should return a 200 and all of the board games', async () => {
    const expectedBoardGames = await database('board_games').select();
    const response = await request(app).get('/api/v1/boardgames');
    const boardGames = response.body;

    expect(response.status).toBe(200);
    expect(boardGames).toEqual(expectedBoardGames);
  })
})

describe('GET /api/v1/cardgames', () => {
  it('should return a 200 and all of the card games', async () => {
    const expectedCardGames = await database('card_games').select();
    const response = await request(app).get('/api/v1/cardgames');
    const cardGames = response.body;

    expect(response.status).toBe(200);
    expect(cardGames).toEqual(expectedCardGames);
  })
})

describe('GET /api/v1/music', () => {
  it('should return a 200 and all of the music', async () => {
    const expectedMusic = await database('music').select();
    const response = await request(app).get('/api/v1/music');
    const music = response.body;

    expect(response.status).toBe(200);
    expect(music).toEqual(expectedMusic);
  })
})

describe('GET /api/v1/music/:genre', () => {
  it('should return a 200 and all music matching a specific genre', async () => {
    const expectedMusic = await database('music').where('genre', 'country').select();
    const response = await request(app).get('/api/v1/music/country');
    const result = response.body;

    expect(response.status).toBe(200);
    expect(result).toEqual(expectedMusic);
  })

  it('should return a 404 and the message "No music found with this genre"', async () => {
    const response = await request(app).get('/api/v1/music/silent');
    const { error } = response.body

    expect(response.status).toBe(404);
    expect(error).toEqual('No music found with this genre');
  })
})

describe('GET /api/v1/podcasts', () => {
  it('should return a 200 and all of the podcasts', async () => {
    const expectedPodcasts = await database('podcasts').select();
    const response = await request(app).get('/api/v1/podcasts');
    const podcasts = response.body;

    expect(response.status).toBe(200);
    expect(podcasts).toEqual(expectedPodcasts);
  })
})

describe('GET /api/v1/podcasts/:genre', () => {
  it('should return a 200 and all podcasts matching a specific genre', async () => {
    const expectedPodcasts = await database('podcasts').where('genre', 'news').select();
    const response = await request(app).get('/api/v1/podcasts/news');
    const result = response.body;

    expect(response.status).toBe(200);
    expect(result).toEqual(expectedPodcasts);
  })

  it('should return a 404 and the message "No podcasts found with this genre"', async () => {
    const response = await request(app).get('/api/v1/podcasts/silence');
    const { error } = response.body

    expect(response.status).toBe(404);
    expect(error).toEqual('No podcasts found with this genre');
  })
})