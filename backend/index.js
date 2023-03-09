const express = require('express');
const app = express();
const config = require('./config/config');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors());

const auth = require('./routes/auth');

app.use('/', auth);

app.listen(config.port, () => {
  console.log('Run');
});
