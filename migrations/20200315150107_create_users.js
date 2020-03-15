
exports.up = function(knex) {
  return knex.schema.createTable('user', (tbl) => {
        tbl.string('username', 64).primary();
        tbl.string('password', 64).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('user');
};
