const fetch = require("node-fetch");
require('dotenv').config(); 

const movieFetch = async (table) => {
  try {
    const response = await fetch(`https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=/chart/popular/genre/${table}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": process.env.IMDB_API_KEY
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
        "x-rapidapi-key": process.env.IMDB_API_KEY
      }
    })
    return await response.json()

  }
  catch (e) {
    return e
  }
}
const boardGame = async (name) => {
  console.log()
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
