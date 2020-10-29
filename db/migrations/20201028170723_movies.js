exports.up = knex => {
  return knex.schema.createTable('movies', function (table) {
    table.increments('id').primary()
    table.string('brief_description')
    table.string('movie_plot', 10000)
    table.string('content_rating')
    table.string('image_poster')
    table.string('imdb_rating')
    table.string('release_date')
    table.string('runtime')
    table.string('title')
    table.string('where_to_watch')
  })
};

exports.down = knex => {
  return knex.schema.dropTable('movies')
};
