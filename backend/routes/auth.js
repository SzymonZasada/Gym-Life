const express = require('express');
const router = express.Router();
const mockLogin = require('../mock/auth-mock');
const { generateAccessToken, generateRefreshToken } = require('../controller/jwt-generate');
const mockRefreshTokens = require('../mock/refresh-tokens');

router.post('/authenticate', (req, res) => {
  const login = req?.body?.loginForm;
  const password = req?.body?.passwordForm;
  const jwtSignObject = {
    loginForm: login,
    passwordForm: password,
  };

  const token = generateAccessToken(jwtSignObject);
  const refreshToken = generateRefreshToken(jwtSignObject);

  if (login && password) {
    const index = mockLogin.findIndex(el => el.loginForm === login);
    if (index >= 0) {
      const passwordMatch = mockLogin[index].passwordForm === password;
      if (passwordMatch) {
        mockRefreshTokens.push(refreshToken);
        res.send({ token, refreshToken });
      } else {
        res.sendStatus(403);
      }
    } else {
      res.sendStatus(403);
    }
  } else {
    res.sendStatus(403);
  }
});

router.post('/register', (req, res) => {
  res.send({ login: 'register' });
});

module.exports = router;
