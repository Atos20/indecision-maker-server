const movieData = require('../../data/movies');
const category = 'family'


  const createBoardgame = async (knex, movie) => {
    const boardId = await knex('movies').insert({
      title: board.title.title,
      movie_plot: movie.plotSummary && movie.plotSummary.text,
      brief_description: movie.plotOutline.text,
      image_poster: movie.title.image.url,
      imdb_rating: movie.ratings.rating,
      release_date: movie.releaseDate,
      runtime: movie.title.runningTimeInMinutes,
      where_to_watch: "not sure",
    }, 'id');
  }
  exports.seed = async (knex) => {
    try {
      await knex('movies').del()
      let allMovieData = await movieData(category)
      let moviePromises = allMovieData.map(movie => {
        return createMovie(knex, movie);
      });
      return Promise.all(moviePromises);
    } catch (error) {
      console.log(`Error seeding data: ${error}`)
    }
  };
};
