require('dotenv').config();

const { NODE_ENV, JWT_SECRET } = process.env;

const config = {
  nodeEnv: NODE_ENV || 'development',
  jwtSecret: NODE_ENV === 'production' ? JWT_SECRET : 'not-so-secret',
};

module.exports = config;
