const authService = require("../services/auth-service");

class AuthController {
	async login(req, res) {
		const { username, password } = req.body;
		try {
			const loginStatus = await authService.login(username, password);
			if (loginStatus) {
				// TODO: Implement jwt token based auth
				res.status(200);
				res.json({ status: "Login success" });
			} else {
				res.status(401);
				res.json({ status: "Login failed" });
			}
		} catch (e) {
			res.status(500);
			res.json({ status: "Internal server error" });
		}
	}
}

module.exports = new AuthController();
