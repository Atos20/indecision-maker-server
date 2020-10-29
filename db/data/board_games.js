const apiCalls = require("../../apiCalls.js")
const games = ['chess', 'jenga', 'clue', 'scrabble', 'connect four', 'candy Land', 'exploding Kittens', 'scrabble', 'life', 'guess Who?', 'operation', 'scategories', 'apples to Apples', 'monopoly', 'battleship', 'mouse trap', 'trivial Pursuit', 'charades', 'pictionary']

const board_gameData = async () => {
  const moviesByGenre = await apiCalls.movieFetch(genre)
  let moviesToPost = []
  let counter = 0;
  while (moviesToPost.length < 25) {
    let randomMovieTitle = moviesByGenre[counter].split('/')[2]
    let randomMovieDetails = await apiCalls.singleMovie(randomMovieTitle)
    if (randomMovieDetails) {
      moviesToPost.push(randomMovieDetails)
    }
    counter++
    setTimeout(() => {console.log(`${counter} / 25`)}, 250)
  }
  return moviesToPost
}

module.exports = movieData;
