const express = require('express');
const db = require('./config/database');
const userModel = require('./models/user-model');

const app = express();
const PORT = 3000;

const initApp = async () => {
	console.log('Testing the database connection..');
	try {
		await db.sync();
		console.log('Connection has been established successfully.');

		app.listen(PORT, () => {
			console.log(
				`Server is up and running at: http://localhost:${PORT}`
			);
		});
	} catch (error) {
		console.error('Unable to connect to the database:', error.original);
	}
};

initApp();

// app.use('/', require('./routes/routes'));

// app.listen(PORT, (req, res) => {
//    console.log('Servidor está rodando!');
// });
