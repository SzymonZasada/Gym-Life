const express = require('express');
const app = express();
const config = require('./config/config');
const cors = require('cors');
const bodyParser = require('body-parser');
const { authMiddleware } = require('./controller/auth-middleware');

const auth = require('./routes/auth');
const token = require('./routes/auth-refresh-token');
const test = require('./routes/test');

app.use(bodyParser.json());
app.use(cors());

app.use(authMiddleware);
app.use('/rest/auth', auth);
app.use('/rest/refresh', token);
app.use('/rest/test', test);

app.listen(config.port, () => {
  console.log('Run');
});
