const express = require('express');
const { resolve } = require('path');

const db = require('../database/index.js');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const { PORT } = process.env;

app.use('/', express.static(resolve(__dirname, '../dist')));

app.listen(PORT, () => {
  console.log(`FleaMarketeer listening on port ${PORT}`);
});
