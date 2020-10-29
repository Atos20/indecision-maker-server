const cardGamesData = require('../../data/cardGamesData.js');

const createCardGame = async (knex, game) => {
  const newCard = await knex('card_games').insert({
    name: game.name,
    instructions: game.instructions,
    description: game.description,
    materials: game.materials,
    number_of_players: game.number_of_players,
    video: game.video,
    family_friendly: game.family_friendly
  });
}

exports.seed = (knex) => {
  try {
    await knex('card_games').del();
    let allGames = cardGamesData.map(game => {
      return createCardGame(knex, game);
    })
    return Promise.all(allGames);
  } catch(error) {
    console.log(`Error seeding data: ${error}`)
  }  
};
