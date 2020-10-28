
exports.up = function (knex) {
    return knex.schema
      .createTable('podcasts', function (table) {
        table.increments('id').primary();
        table.string('title', 50).notNullable();
        table.string('author', 50).notNullable();
        table.string('audience', 50).notNullable();
        table.string('genre', 50).notNullable();
        table.string('collectionViewUrl');
        table.integer('episode_count').notNullable();
        table.string('release_date', 50).notNullable();
        table.string('image_60');
        table.string('image_100');
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable('podcasts')
  };
