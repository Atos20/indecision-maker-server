exports.up = knex => {
  return knex.schema.createTable('board_games', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.text('description')
    table.string('min_players')
    table.string('max_players')
    table.string('image')
    table.string('average_time').defaultTo(1)
    table.timestamps(true, true)
  })
};

exports.down = knex => {
  return knex.schema.dropTable('board_games')
};
