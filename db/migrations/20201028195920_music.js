exports.up = function (knex) {
    return knex.schema
      .createTable('music', function (table) {
        table.increments('id').primary();
        table.string('artist');
        table.string('genre');
        table.string('song_title');//collectioSensorName
        table.string('album_title');
        table.string('album_url');
        table.string('familiy_friendly').defaultTo(1);
        table.string('release_date');
        table.string('image_60');
        table.string('image_100');
        table.timestamps(true, true)
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable('music')
  };
