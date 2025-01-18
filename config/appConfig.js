require('dotenv').config(); // Load .env variables

const appConfig = {
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    port: process.env.DB_PORT || '3306',
  },
};

module.exports = appConfig;
