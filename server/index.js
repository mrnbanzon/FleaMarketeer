const express = require('express');
const compression = require('compression');
const { resolve } = require('path');

const app = express();
const PORT = process.env.PORT || 4000;

// compress responses (will use eventually)
app.use(compression());

// express built-in body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve static files
app.use('/', express.static(resolve(__dirname, '../dist')));

app.listen(PORT, () => {
  console.log(`FleaMarketeer listening on port ${PORT}`);
});
