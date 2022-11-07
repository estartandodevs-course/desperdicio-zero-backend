const express = require('express');
const router = express.Router({});

router.get('/health-check', (req, res) => {
	const healthcheck = {
		message: 'Hi! Welcome to the API!',
		version: '1.0.0',
		uptime: process.uptime(),
		date: new Date(),
	};
	try {
		res.status(200).send(healthcheck);
	} catch (error) {
		healthcheck.message = error;
		res.status(400).send();
	}
});

module.exports = router;
