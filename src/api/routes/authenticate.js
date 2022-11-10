const express = require('express');
const { createValidator } = require('express-joi-validation');

const router = express.Router({});
const validator = createValidator({});

const { authenticateBodySchema } = require('../middleware/authenticate-user');

const loginAuthController = require('../controllers/authenticate-user');

router.post(
	'/login',
	validator.body(authenticateBodySchema),
	loginAuthController.authenticateUserController
);

module.exports = router;
