
exports.up = function(knex) {
  return knex.schema
    .createTable('card_games', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.string('instructions');
      table.string('description');
      table.boolean('single_player').defaultTo(0);
      table.array('materials');
      table.integer('number_of_players');
      table.string('image');
      table.boolean('family_friendly').defaultTo(1);
      table.timestamps(true, true);
    })
};

exports.down = function(knex) {
  
};
