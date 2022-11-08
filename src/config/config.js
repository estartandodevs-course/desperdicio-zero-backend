require('dotenv').config();

const isDbSSL = process.env.DB_SSL === 'true' ?? false;

const sslConfig = {
	dialectOptions: {
		ssl: true,
	},
};

const connectionData = {
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	host: process.env.DB_HOST,
	dialect: process.env.DB_DIALECT,
	...(isDbSSL ? sslConfig : {}),
};

module.exports = {
	development: {
		...connectionData,
	},
	test: {
		...connectionData,
	},
	production: {
		...connectionData,
	},
};
