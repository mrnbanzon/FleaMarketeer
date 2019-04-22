const Sequelize = require('sequelize');
const db = new Sequelize('fleamarket', '', '', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false
});

/* NOTE: create db 'fleamarket' in postgres prior to running */
db.authenticate()
  .then(() => {
    console.log('Connected to fleamarketeer db.');
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err);
  });

/* db Schema */

module.exports.db = db;
