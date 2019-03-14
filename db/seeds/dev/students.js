const students = require('../../../students')

exports.seed = function(knex, Promise) {
  return knex('students').del()
    .then(function () {
      return knex('students').insert(students);
    });
};
