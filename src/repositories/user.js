const db = require("../config/knex");

const TABLE = "user";

class User {
  save(user) {
    return db.table(TABLE).insert(user);
  }

  delete(username) {
    return db
      .table(TABLE)
      .where({ username: username })
      .del();
  }

  get(username) {
    return db
      .table(TABLE)
      .select("username", "password")
      .where({ username: username })
      .limit(1);
  }
}

export default new User();
