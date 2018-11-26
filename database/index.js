const Sequelize = require('sequelize');
const db = new Sequelize('fleamarket', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

/* NOTE: create db 'fleamarket' in mysql prior to running */
db.authenticate()
  .then(() => {
    console.log('Connected to fleamarketeer db.');
  })
  .catch(err => {
    console.log('Unable to connect to the database:', err);
  });

/* db Schema */

module.exports.db = db;
