const config = require('./src/config/db');

const knexConfig = {
    migrations: {
        directory: './migrations',
    },
    seeds: {
        directory: './seeds',
    },
    ...config,
};

module.exports = knexConfig;