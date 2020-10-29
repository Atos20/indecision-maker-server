const apiCalls = require("../../apiCalls.js")

const board_gameData = async () => {
  const games = ['chess', 'checkers', 'jenga', 'clue', 'scrabble', 'connect four', 'candy Land', 'exploding Kittens', 'scrabble', 'life', 'guess who', 'operation', 'Scattergories', 'apples to Apples', 'monopoly', 'battleship', 'mouse trap', 'trivial Pursuit', 'charades', 'pictionary']
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

module.exports = board_gameData;
