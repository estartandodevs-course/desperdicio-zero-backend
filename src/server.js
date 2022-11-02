const express = require('express');
const db = require('./config/database');
const router = require('./routes/routes');
const userController = require('./api/controllers/user-controller');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

app.listen(PORT, () => {
	console.log(
		`🚀 Server is up and running on port:${PORT}`
	);
});

db.sync(() =>
	console.log(`🚀 Database is Up: ${process.env.DB_NAME}`)
);
