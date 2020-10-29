const fetch = require("node-fetch");

const movieFetch = async (table) => {
  try {
    const response = await fetch(`https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=/chart/popular/genre/${table}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "580db340e1mshd3d03efa046e426p182a53jsnf5a8138fcc1a"
      }
    })
    return await response.json()

  }
  catch (e) {
    return e
  }
}
const singleMovie = async (title) => {
  try {
    const response = await fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${title}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "580db340e1mshd3d03efa046e426p182a53jsnf5a8138fcc1a"
      }
    })
    return await response.json()

  }
  catch (e) {
    return e
  }
}
const boardGame = async (name) => {
  try {
    const response = await fetch(`https://www.boardgameatlas.com/api/search?name=${name}&pretty=true&client_id=JLBr5npPhV`, {
      "method": "GET",
    })
    return await response.json()
  }
  catch (e) {
    return e
  }
}
module.exports = {
  movieFetch, singleMovie, boardGame
}
