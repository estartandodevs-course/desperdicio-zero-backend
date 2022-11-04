const Sequelize = require('sequelize');
const database = require('../../../config/database');

const User = database.define('user', {
	id: {
		type: Sequelize.UUID,
		allowNull: false,
		primaryKey: true,
		defaultValue: Sequelize.UUIDV4,
	},
	first_name: {
		type: Sequelize.STRING,
	},
	family_name: {
		type: Sequelize.STRING,
	},
	email_adress: {
		type: Sequelize.STRING,
	},
	phone_number: {
		type: Sequelize.STRING(11),
		allowNull: false,
	},
	birthday: {
		type: Sequelize.DATE,
		allowNull: false,
	},
	sex: Sequelize.STRING,
	created_at: {
		allowNull: false,
		type: Sequelize.DATE,
	},
	created_at: {
		type: Sequelize.DATE,
	},
	updated_at: {
		type: Sequelize.DATE,
	},
});

module.exports = User;
