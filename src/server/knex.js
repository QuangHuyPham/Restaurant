const knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'restaurant',
      charset  : 'utf8'
    },
    pool: {
      min: 0,
      max: 10
    },
    acquireConnectionTimeout: 12000,
    debug: false
  });

  module.exports = knex;