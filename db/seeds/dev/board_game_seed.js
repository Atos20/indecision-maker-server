const boardGameData = require("../../data/board_games_data");
const createBoardgame = async (knex, board) => {
  await knex("board_games").insert({
    name: board.name,
    description: board.description || board.description_preview,
    min_players: board.min_players,
    max_players: board.max_players,
    image: board.image_url,
    average_time: (+board.min_playtime + +board.max_playtime) / 2,
  });
};
exports.seed = async (knex) => {
  try {
    await knex("board_games").del();
    let boardData = await boardGameData();
    let boardGamePromises = boardData.map((board) => {
      return createBoardgame(knex, board);
    });
    return Promise.all(boardGamePromises);
  } catch (error) {
    console.log(`Error seeding data: ${error}`);
  }
};
