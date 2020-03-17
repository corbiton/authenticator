let config = {
	development: {
		client: "sqlite3",
		connection: {
			filename: "./db.sqlite"
		},
		useNullAsDefault: true
	},
	// TODO: Make below config dynamic
	production: {}
};

config =
  process.env.ENV === "production" ? config.production : config.development;

module.exports = config;
