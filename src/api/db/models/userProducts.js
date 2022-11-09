const Sequelize = require('sequelize');
const database = require('../../../config/database');

const UserProducts = database.define('user_products', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	user_id: {
		type: Sequelize.UUID,
	},
	product_id: {
		type: Sequelize.INTEGER,
	},
	created_at: {
		type: Sequelize.DATE,
	},
	updated_at: {
		type: Sequelize.DATE,
	},
});

module.exports = UserProducts;
