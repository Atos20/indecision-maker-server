import cardGamesData from '../../data/cardGamesData.js';

const createCardGame = async (knex, game) => {
  const newPaper = await knex('card_games').insert({
    name: game.name,
    instructions: game.instructions,
    description: game.description,
    single_player: game.single_player,
    materials: game.materials,
    number_of_players: game.number_of_players,
    video: game.video,
    family_friendly: game.family_friendly
  });
}

exports.seed = async (knex) => {
  try {
    await knex('card_games').del();
    let gamePromises = cardGamesData.map(game => {
      return createCardGame(knex, game);
    })
    return Promise.all(gamePromises)
  } catch(error) {
    console.log(`Error seeding data: ${error}`)
  }  
};
