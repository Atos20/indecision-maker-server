const apiCalls = require("../../apiCalls.js")

const movieData = async (genre) => {
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
    setTimeout(() => {console.log('hi')}, 500)
  }
  return moviesToPost
}

module.exports = movieData;
