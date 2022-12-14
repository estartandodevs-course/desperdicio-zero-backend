require('dotenv').config();
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
	process.env.DB_NAME,
	process.env.DB_USER,
	process.env.DB_PASSWORD,
	{
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		user: process.env.DB_USER,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_NAME,
		dialect: 'postgres',
		define: {
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			id: {
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
		},
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
);

module.exports = sequelize;
