exports.up = knex => {
  return knex.schema.createTable('board_games', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('instructions', 10000)
    table.string('description', 1000)
    table.string('materials')
    table.string('number_of_players')
    table.string('image')
    table.string('where_to_watch').defaultTo(1)
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('board_games')
};
