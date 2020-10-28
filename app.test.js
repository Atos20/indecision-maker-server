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