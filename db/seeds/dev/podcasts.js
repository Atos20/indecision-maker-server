const apiCalls = require('../../../apiCalls.js');

const createPodcast = async (knex, podcast) => {
  const newPodCast = await knex('podcasts').insert(
    {
      podcast_name: podcast.artistName,
      podcast_title: podcast.collectionName,
      author: podcast.artistName,
      genre: podcast.genres[0],
      collection_url:podcast.collectionViewUrl,
      episode_count: podcast.trackCount,
      release_date: podcast.releaseDate,
      type: podcast.trackExplicitness,
      image_60: podcast.artworkUrl60,
      image_100:podcast.artworkUrl100
    });
}

exports.seed = async (knex) => {
  try {
    await knex('podcasts').del()
    let podcastPromise = await apiCalls.getAllData('podcast')
    let podcastTableData = podcastPromise.results.map(podcast => {
      return createPodcast(knex, podcast);
    });
    return Promise.all(podcastTableData);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
