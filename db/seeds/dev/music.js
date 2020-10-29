const apiCalls = require('../../../apiCalls.js');

const createMusic = async (knex, music) => {
  const newmusic = await knex('music').insert(
    {
      artist: music.artistName,
      genre: music.primaryGenreName,
      song_title: music.trackName,
      album_title:music.collectionName,
      album_url: music.collectionViewUrl,
      release_date: music.releaseDate,
      type: music.trackExplicitness,
      image_60: music.artworkUrl60,
      image_100:music.artworkUrl100,
    });
}

exports.seed = async (knex) => {
  try {
    await knex('music').del()
    let musicPromise = await apiCalls.getAllData('music')
    let musicTableData = musicPromise.results.map(music => {
      return createMusic(knex, music);
    });
    return Promise.all(musicTableData);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
