const movieData = require('../../data/movies');
const category = 'family'

const createBoardgame = async (knex, movie) => {
  const boardId = await knex('movies').insert({
    name: board.name,
    description: board.description || board.description_preview,
    min_players: board.min_players,
    max_players: board.max_players,
    image: board.image_url,
    average_time: ((+board.min_playtime + +board.max_playtime) / 2),
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
