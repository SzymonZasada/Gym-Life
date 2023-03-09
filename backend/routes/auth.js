const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ ffff: 'ddddddddd' });
});

module.exports = router;
