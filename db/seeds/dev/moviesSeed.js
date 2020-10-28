const movieData = require('../../data/movies');
// const tables = ['adventure', 'all', 'comedy', 'fantasty', 'animation', 'family']
const category = 'family'

const createMovie = async (knex, movie) => {
  const movieId = await knex('movies').insert({
    title: movie.title.title,
    brief_description: movie.plotSummary.text,
    content_rating: movie.certificates.US.certificate,
    image_poster: movie.title.image.url,
    imdb_rating: movie.rating.rating,
    release_date: movie.releaseDate,
    runtime: movie.title.runningTimeInMinutes,
    where_to_watch: "not sure",
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
