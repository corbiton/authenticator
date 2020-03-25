const bcrypt = require("bcrypt");
const config = require("../config/jwtConfig");
const User = require("../repositories/user");
const jwt = require("jsonwebtoken");

class AuthService {
  async register(username, password) {
    const hashedPassword = bcrypt.hashSync(password, 2);
    await User.save({ username: username, password: hashedPassword });
  }

  async login(username, password) {
    const result = await User.get(username);
    if (result && result.length > 0) {
      const hashedPassword = result[0].password;
      const isCorrectPwd = bcrypt.compareSync(password, hashedPassword);
      return isCorrectPwd;
    }
    return false;
  }

  async getToken(payload) {
    return jwt.sign(payload, config.JWT_SECRET, { expiresIn: config.EXPIRY });
  }

  authenticate(token, cb) {
    jwt.verify(token, config.JWT_SECRET, cb);
  }
}

module.exports = new AuthService();
