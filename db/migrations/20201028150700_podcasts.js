
exports.up = function (knex) {
    return knex.schema
      .createTable('podcasts', function (table) {
        table.increments('id').primary();
        table.string('podcast_name');
        table.string('podcast_title');
        table.string('author');
        table.boolean('familiy_friendly').defaultTo(1);
        table.string('genre');
        table.string('type');
        table.string('collection_url');
        table.integer('episode_count');
        table.string('release_date');
        table.string('image_60');
        table.string('image_100');
        table.timestamps(true, true)
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable('podcasts')
  };
