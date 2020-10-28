
exports.up = function (knex) {
    return knex.schema
      .createTable('podcasts', function (table) {
   
      })
  };
  
  exports.down = function (knex) {
    return knex.schema
      .dropTable('podcasts')
  };
