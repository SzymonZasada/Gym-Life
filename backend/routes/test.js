const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.send({ test: 'test ' });
});

module.exports = router;
