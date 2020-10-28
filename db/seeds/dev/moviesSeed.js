const movieData = require('../../data/movies');
const tables = ['adventure', 'all', 'comedy', 'fantasty', 'animation', 'family']
const table = 'family'

const createMovie = async (knex, movie) => {
  const movieId = await knex(table).insert({
    title: movie,

  }, 'id');
}
exports.seed = async (knex) => {
  try {
    await knex(table).del()
    let movieData2 = await movieData(table)
    let moviePromises = movieData2.map(movie => {
      return createMovie(knex, movie);
    });
    return Promise.all(moviePromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
