const movieData = require('../../data/movies');
// const tables = ['adventure', 'all', 'comedy', 'fantasty', 'animation', 'family']
const category = 'family'

const createMovie = async (knex, movie) => {
  const movieId = await knex('movies').insert({
    title: movie.title.title,

  }, 'id');
}
exports.seed = async (knex) => {
  try {
    await knex('movies').del()
    let allMovieData = await movieData(category)
    console.log(allMovieData)
    let moviePromises = allMovieData.map(movie => {
      return createMovie(knex, movie);
    });
    return Promise.all(moviePromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
