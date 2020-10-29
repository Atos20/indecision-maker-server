const apiCalls = require("../../apiCalls.js")
const games = ['chess', 'checkers', 'jenga', 'clue', 'scrabble', 'connect four', 'candy Land', 'exploding Kittens', 'scrabble', 'life', 'guess Who?', 'operation', 'scategories', 'apples to Apples', 'monopoly', 'battleship', 'mouse trap', 'trivial Pursuit', 'charades', 'pictionary']

const board_gameData = async () => {
  let gamesToPost = []
  let counter = 0;
  while (gamesToPost.length < 20) {
    const gamesInfo = await apiCalls.boardGame(games[counter])
    if (gamesInfo) {
      moviesToPost.push(randomMovieDetails)
    }
    counter++
    setTimeout(() => {console.log(`${counter} / 20`)}, 250)
  }
  return gamesToPost
}

module.exports = movieData;
