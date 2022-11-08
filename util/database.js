const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense-Tracker', 'user', '1808', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;