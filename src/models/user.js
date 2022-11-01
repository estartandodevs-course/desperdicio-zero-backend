const Sequelize = require('sequelize');
const database = require('../config/database');

const User = database.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  first_name: {
    type: Sequelize.STRING
  },
  family_name: {
    type: Sequelize.STRING
  },
  email_adress: {
    type: Sequelize.STRING
  },
  birthday: {
    type: Sequelize.DATE
  },
  created_at: {
    type: Sequelize.TIME
  },
  updated_at: {
    type: Sequelize.TIME
  }
});

module.exports = User;