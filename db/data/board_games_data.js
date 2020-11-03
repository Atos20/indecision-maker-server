const apiCalls = require("../../apiCalls.js")

const board_games_data = async () => {
  const games = ['chess', 'mouse trap', 'jenga', 'clue', 'scrabble', 'connect four', 'candy land', 'exploding kittens', 'uno', 'life', 'guess who', 'chutes and ladders', 'scattergories', 'apples to apples', 'monopoly', 'battleship', 'mouse trap', 'trivial pursuit', 'charades', 'pictionary']
  let gamesToPost = []
  let counter = 0;
  while (gamesToPost.length < 20) {
    const gamesInfo = await apiCalls.boardGame(games[counter])
    if (gamesInfo) {
      gamesToPost.push(gamesInfo.games[0])
    }
    counter++
    setTimeout(() => {console.log(`${counter} / 20`)}, 100)
  }
  return gamesToPost
}

module.exports = board_games_data;
