
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', function(table) {
    table.increments('id').primary()
    table.string('lastname')
    table.string('program')
    table.boolean('enrolled').defaultTo(true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students')
};
