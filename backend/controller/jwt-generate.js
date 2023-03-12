const jwt = require('jsonwebtoken');

const ACCESS_TOKEN_KEY = 'uniqueNameKeptInEnvFilesAccess';
const REFRESH_TOKEN_KEY = 'uniqueNameKeptInEnvFilesRefresh';

const generateAccessToken = function (object) {
  const token = jwt.sign(object, ACCESS_TOKEN_KEY, { expiresIn: '30s' });
  return token;
};

const generateRefreshToken = function (object) {
  const refreshToken = jwt.sign(object, REFRESH_TOKEN_KEY, { expiresIn: '60s' });
  return refreshToken;
};

module.exports = { generateAccessToken, generateRefreshToken, ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY };
