const Sequelize = require('sequelize');
const database = require('../../../config/database');

const Product = database.define('products', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: Sequelize.STRING,
	},
	validity: {
		type: Sequelize.DATE,
	},
	location: {
		type: Sequelize.STRING,
	},
	price: {
		type: Sequelize.FLOAT,
	},
	weight: {
		type: Sequelize.FLOAT,
	},
	weightUnit: {
		type: Sequelize.STRING,
	},
	created_at: {
		type: Sequelize.DATE,
	},
	updated_at: {
		type: Sequelize.DATE,
	},
});

module.exports = Product;
