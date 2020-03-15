const knex = require('knex');
const dbConfig = require('./db');

module.exports = knex(dbConfig);
