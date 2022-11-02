const Sequelize = require('sequelize');
const database = require('../../../config/database');

const User = database.define('users', {
  id: {
    type: Sequelize.UUID,
    allowNull: false,
    primaryKey: true
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
  phone_number: {
	type: Sequelize.STRING(11),
  },
  sex: {
	type: Sequelize.STRING,
  },
  birthday: {
    type: Sequelize.DATE
  },
  created_at: {
    type: Sequelize.DATE
  },
  updated_at: {
    type: Sequelize.DATE
  }
});

module.exports = User;