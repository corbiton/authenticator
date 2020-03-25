const authService = require("../services/auth-service");

class AuthController {
  async register(req, res) {
    const { username, password } = req.body;
    try {
      await authService.register(username, password);
      res.status(201).json({ status: "Registration success" });
    } catch (e) {
      res.status(500).json({ status: "Internal server error" });
    }
  }

  async login(req, res) {
    const { username, password } = req.body;
    try {
      const loginStatus = await authService.login(username, password);
      if (loginStatus) {
        let payload = { username };
        const token = await authService.getToken(payload);
        payload.token = token;
        res.status(200).json({ status: "Login success", payload });
      } else {
        res.status(401).json({ status: "Login failed" });
      }
    } catch (e) {
      res.status(500).json({ status: "Internal server error" });
    }
  }

  authenticate(req, res) {
    authService.authenticate(req.body.token, (err, payload) => {
      if (err) res.status(401).json({ status: "Unauthorized" });
      else res.status(200).json(payload);
    });
  }
}

module.exports = new AuthController();
