const movieFetch = require('../../apiCalls.js')

const movieData = async (table) => {
  const dataToPopulate = await movieFetch(table)
  return dataToPopulate
}

module.exports = movieData;
