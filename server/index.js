const express = require('express');
const compression = require('compression');
const { resolve } = require('path');

const db = require('../database/index.js');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 4000;

app.use(compression());
app.use('/', express.static(resolve(__dirname, '../dist')));

app.listen(PORT, () => {
  console.log(`FleaMarketeer listening on port ${PORT}`);
});
