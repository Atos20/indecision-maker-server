const getAllData = require('../../../itunesCall.js');

const createMusic = async (knex, music) => {
  console.log(music)
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
    let musicPromise = await getAllData('music')
    let musicTableData = musicPromise.results.map(music => {
      return createMusic(knex, music);
    });
    return Promise.all(musicTableData);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};

// {
//   wrapperType: 'track',
//   kind: 'song',
//   artistId: 31239777,
//   collectionId: 385629502,
//   trackId: 385629752,
//   artistName: 'The Fray',
//   collectionName: 'How to Save a Life',
//   trackName: 'How to Save a Life (New Version)',
//   collectionCensoredName: 'How to Save a Life',
//   trackCensoredName: 'How to Save a Life (New Version)',
//   artistViewUrl: 'https://music.apple.com/us/artist/the-fray/31239777?uo=4',
//   collectionViewUrl: 'https://music.apple.com/us/album/how-to-save-a-life-new-version/385629502?i=385629752&uo=4',
//   trackViewUrl: 'https://music.apple.com/us/album/how-to-save-a-life-new-version/385629502?i=385629752&uo=4',
//   previewUrl: 'https://audio-ssl.itunes.apple.com/itunes-assets/Music/03/39/db/mzm.bibctemn.aac.p.m4a',
//   artworkUrl30: 'https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/2c/93/4d/2c934dc6-e73b-9dce-1ff4-ebb6bc76df0e/source/30x30bb.jpg',
//   artworkUrl60: 'https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/2c/93/4d/2c934dc6-e73b-9dce-1ff4-ebb6bc76df0e/source/60x60bb.jpg',
//   artworkUrl100: 'https://is5-ssl.mzstatic.com/image/thumb/Music3/v4/2c/93/4d/2c934dc6-e73b-9dce-1ff4-ebb6bc76df0e/source/100x100bb.jpg',
//   collectionPrice: 9.99,
//   trackPrice: 1.29,
//   releaseDate: '2005-09-13T07:00:00Z',
//   collectionExplicitness: 'notExplicit',
//   trackExplicitness: 'notExplicit',
//   discCount: 1,
//   discNumber: 1,
//   trackCount: 12,
//   trackNumber: 3,
//   trackTimeMillis: 262533,
//   country: 'USA',
//   currency: 'USD',
//   primaryGenreName: 'Rock',
//   isStreamable: true
// }