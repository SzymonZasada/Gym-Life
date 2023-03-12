const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_KEY } = require('../controller/jwt-generate');

const authMiddleware = (req, res, next) => {
  const token = req.headers?.authorization?.split(' ')[1];
  const loginPath = '/rest/auth/authenticate';
  const refreshPath = '/rest/refresh';

  if (req.path !== loginPath && req.path !== refreshPath) {
    if (!token) {
      return res.sendStatus(403);
    }
    jwt.verify(token, ACCESS_TOKEN_KEY, (err, data) => {
      if (err) {
        return res.sendStatus(401);
      } else {
        next();
      }
    });
  } else {
    next();
  }
};

module.exports = { authMiddleware };
