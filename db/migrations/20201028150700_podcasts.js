
exports.up = function (knex) {
    return knex.schema
      .createTable('podcasts', function (table) {
        table.increments('id').primary();
        table.string('podcast_id');
        table.string('podcast_name');
        table.string('podcast_title');
        table.string('author');
        table.string('audience');
        table.string('genre');
        table.string('collectionViewUrl');
        table.integer('episode_count');
        table.string('release_date');
        table.string('image_60');
        table.string('image_100');
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable('podcasts')
  };
