exports.up = knex => {
  return knex.schema.createTable('questions', function (table) {
    table.increments('id').primary()
    table.string('question')
    table.text('choices')
    table.string('activities')
    table.string('answerType')
  })
};

exports.down = knex => {
  return knex.schema.dropTable('questions')
};

