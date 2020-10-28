const apiCalls = require("../../apiCalls.js")

const movieData = async (genre) => {
  const moviesByGenre = await apiCalls.movieFetch(genre)
  const scaledDownMovies = moviesByGenre.slice(0, 25)
  return dataToPopulate.reduce(async (acc, cur) => {
    let randomMovieTitle = cur.title.split('/')[2]
    let randomMovieDetails = await apiCalls.singleMovie(randomMovieTitle)
    acc.push(randomMovieDetails)
    return acc
  })
}

module.exports = movieData;
