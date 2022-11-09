const Sequelize = require('sequelize');
const database = require('../../../config/database');

const UnitMeasurement = database.define('unit_measurements', {
	id: {
		type: Sequelize.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	name: {
		type: Sequelize.STRING,
	},
	description: {
		type: Sequelize.STRING,
	},
	created_at: {
		type: Sequelize.DATE,
	},
	updated_at: {
		type: Sequelize.DATE,
	},
});

module.exports = UnitMeasurement;
