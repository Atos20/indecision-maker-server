const getAllPodcasts = require('../../../itunesCall.js');

const createPodcast = async (knex, podcast) => {
  const newPodCast = await knex('podcasts').insert(

    {
      podcast_id: podcast.collectionId,
      podcast_name: podcast.artistName,
      podcast_title: podcast.collectionName,
      author: podcast.artistName,
      audience:podcast.contentAdvisoryRating,
      genre: podcast.genres[0],
      collectionViewUrl:podcast.collectionViewUrl,
      episode_count: podcast.trackCount,
      release_date: podcast.releaseDate,
      image_60: podcast.artworkUrl60,
      image_100:podcast.artworkUrl100
    });

}

exports.seed = async (knex) => {
  try {
    await knex('podcasts').del()
    let podcastPromise = await getAllPodcasts()
    let podcastTableData = podcastPromise.results.map(podcast => {
      return createPodcast(knex, podcast);
    });
    return Promise.all(podcastTableData);
  } catch (error) {
    console.log(`Error seeding data: ${error}`)
  }
};
