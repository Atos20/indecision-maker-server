const students = require('../../../students')

exports.seed = async knex => {
  await knex('students').del()
  await knex('students').insert(students);
};
