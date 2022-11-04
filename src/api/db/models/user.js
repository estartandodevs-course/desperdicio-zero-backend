const Sequelize = require('sequelize');
const database = require('../../../config/database');

const User = database.define('user', {
	id: {
		type: Sequelize.UUID,
		allowNull: false,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
		unique: true,
	},
	first_name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	family_name: {
		type: Sequelize.STRING,
	},
	email_adress: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: true,
	},
	phone_number: {
		type: Sequelize.STRING(11),
		allowNull: false,
		unique: true,
	},
	birthday: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	sex: Sequelize.STRING,
	password: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	created_at: {
		type: Sequelize.DATE,
	},
	updated_at: {
		type: Sequelize.DATE,
	},
});

module.exports = User;
