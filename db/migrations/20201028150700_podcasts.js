
exports.up = function (knex) {
    return knex.schema
      .createTable('podcasts', function (table) {
        table.increment('id');
        table.string('title').notNullable();
        table.integer('author').notNullable();
        table.integer('audience').notNullable();
        table.integer('genre').notNullable();
        table.integer('episode_count').notNullable();
        table.string('collectionViewUrl').notNullable();
        table.integer('episode_count').notNullable();
        table.string('release_date').notNullable();
        table.string('image_60').notNullable();
        table.string('image_100').notNullable();
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable('podcasts')
  };
