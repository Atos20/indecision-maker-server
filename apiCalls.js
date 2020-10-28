const fetch = require("node-fetch");

const movieFetch = async (table) => {
  console.log(table)
  try {
    const response = await fetch(`https://imdb8.p.rapidapi.com/title/get-popular-movies-by-genre?genre=/chart/popular/genre/${table}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "ee8a5cc54emsh53e006c1504c8bfp1b5ea1jsn9ecd43ea0293"
      }
    })
    const resolved = await response.json()
    return resolved
  }
  catch (e) {
    console.log(e);
  }
}
const singleMovie = async (title) => {
  try {
    const response = await fetch(`https://imdb8.p.rapidapi.com/title/get-overview-details?currentCountry=US&tconst=${title}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "imdb8.p.rapidapi.com",
        "x-rapidapi-key": "ee8a5cc54emsh53e006c1504c8bfp1b5ea1jsn9ecd43ea0293"
      }
    })
    const resolved = await response.json()
    console.log(resolved)
    return resolved
  }
  catch (e) {
  }
}
module.exports = movieFetch
