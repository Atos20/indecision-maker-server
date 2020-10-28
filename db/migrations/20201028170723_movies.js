exports.up = knex => {
  return knex.schema.createTable('movies', function (table) {
    table.increments('id').primary()
    table.string('brief_description')
    table.integer('content_rating')
    table.string('image_poster')
    table.integer('imdb_rating')
    table.string('release_date')
    table.string('title')
    table.string('where_to_watch')
  })
};

exports.down = knex => {
  return knex.schema.dropTable('movies')
};
