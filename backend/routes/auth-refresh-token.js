const express = require('express');
const router = express.Router();
const mockRefreshTokens = require('../mock/refresh-tokens');
const jwt = require('jsonwebtoken');
const { generateAccessToken } = require('../controller/jwt-generate');
const { REFRESH_TOKEN_KEY } = require('../controller/jwt-generate');

router.post('/', (req, res) => {
  const { refreshToken } = req.body;
  if (!mockRefreshTokens.includes(refreshToken)) {
    return res.sendStatus(403);
  }

  jwt.verify(refreshToken, REFRESH_TOKEN_KEY, (err, data) => {
    if (err) {
      return res.sendStatus(403);
    }
    const jwtSignObject = {
      loginForm: data.login,
      passwordForm: data.password,
    };
    const newAccessToken = generateAccessToken(jwtSignObject);
    return res.send({ token: newAccessToken });
  });
});

module.exports = router;
