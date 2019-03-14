// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/students',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/students_test',
    migrations: {
      directory: './db/migrations'
    },
    useNullAsDefault: true,
  },

};
