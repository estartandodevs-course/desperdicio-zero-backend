const Sequelize = require('sequelize');
const database = require('../../../config/database');

const User = database.define('user', {
	id: {
		type: Sequelize.UUID,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
		unique: true,
	},
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	email_adress: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	birthday: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	phone_number: {
		type: Sequelize.STRING(11),
		allowNull: false,
	},
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	sex: {
		type: Sequelize.STRING,
	},
	created_at: {
		type: Sequelize.DATE,
	},
	updated_at: {
		type: Sequelize.DATE,
	},
});

module.exports = User;
