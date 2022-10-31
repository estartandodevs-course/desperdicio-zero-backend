const Sequelize = require('sequelize');
const database = require('../config/database');

const Users = database.define('user', {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true,
	},
	first_name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	family_name: Sequelize.STRING,
	email_address: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	birth_date: {
		type: Sequelize.DATE,
		allowNull: false,
	},
});

module.exports = Users;
