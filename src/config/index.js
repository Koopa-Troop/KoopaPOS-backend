require('dotenv').config();

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  cors: process.env.CORS,
  dbConn: process.env.DB_CONN,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_NAME,
  authJwtSecret: process.env.AUTH_JWT_SECRET,
  defaultUserPassword: process.env.DEFAULT_USER_PASSWORD,
  publicApiKeyToken: process.env.PUBLIC_API_KEY_TOKEN,
};

module.exports = { config };
