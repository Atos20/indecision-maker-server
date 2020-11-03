const apiCalls = require("../../apiCalls.js")

const movie_data = async (genre) => {
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

module.exports = movie_data;
