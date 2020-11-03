exports.up = (knex) => {
  return knex.schema.createTable("questions", function (table) {
    table.increments("id").primary();
    table.string("question");
    table.specificType("choices", "text ARRAY");
    table.string("activity");
    table.string("answerType");
    table.string("allowedResponses");
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable("questions");
};
