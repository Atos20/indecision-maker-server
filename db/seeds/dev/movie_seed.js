const movieData = require("../../data/movies_data.js");
const createMovie = async (knex, movie) => {
  await knex("movies").insert({
    title: movie.title.title,
    genre: movie.genres,
    content_rating: movie.certificates && movie.certificates.US[0].certificate,
    movie_plot: movie.plotSummary && movie.plotSummary.text,
    brief_description: movie.plotOutline.text,
    image_poster: movie.title.image.url,
    imdb_rating: movie.ratings.rating,
    release_date: movie.releaseDate,
    runtime: movie.title.runningTimeInMinutes,
  });
};
exports.seed = async (knex) => {
  try {
    await knex("movies").del();
    let allMovieData = await movieData(category);
    let moviePromises = allMovieData.map((movie) => {
      return createMovie(knex, movie);
    });
    return Promise.all(moviePromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
