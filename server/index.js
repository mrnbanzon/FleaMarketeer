const express = require('express');
const compression = require('compression');
const { resolve } = require('path');


// temp data storage
const { data } = require('../database/data.js');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(compression());

// express built-in body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// serve static files
app.use('/', express.static(resolve(__dirname, '../dist')));

// obtain necessary data upon login
app.get('/loginData', (req, res) => {
  res.send(data);
});

// add item to inventory
app.post('/addToInventory', (req, res) => {
  let product = req.body;
  data.inventory.push(product);
  data.inventoryCount += product.amount;
  res.send();
});

app.listen(PORT, () => {
  console.log(`FleaMarketeer listening on port ${PORT}`);
});
