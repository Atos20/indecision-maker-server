exports.up = function (knex) {
  return knex.schema
    .createTable('card_games', function (table) {
      table.increments('id').primary();
      table.string('name');
      table.text('instructions', 10000);
      table.text('description', 10000);
      table.string('materials');
      table.string('min_players');
      table.string('max_players');
      table.string('video');
      table.boolean('family_friendly').defaultTo(1);
    })
};

exports.down = function (knex) {
  return knex.schema
    .dropTable('card_games');
};
