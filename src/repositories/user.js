const db = require("../config/knex");

const TABLE = "user";

class User {
  async save(user) {
    return await db.table(TABLE).insert(user);
  }

  async delete(username) {
    return await db
      .table(TABLE)
      .where({ username: username })
      .del();
  }

  async get(username) {
    return await db
      .table(TABLE)
      .select("username", "password")
      .where({ username: username })
      .limit(1);
  }
}

module.exports = new User();
