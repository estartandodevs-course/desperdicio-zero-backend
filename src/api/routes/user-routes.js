const express = require('express');
const router = express.Router({});
const { createValidator } = require('express-joi-validation');
const validator = createValidator({});
const {
	userQuerySchema,
	userDefaultBodySchema,
} = require('../middleware/user-validator');
const userController = require('../controllers/user-controller');

//TODO: implementar validator

router.get(
	'/user',
	validator.query(userQuerySchema),
	userController.getUserById
);
router.get('/users', userController.getAllUsers);
router.post(
	'/user',
	validator.body(userDefaultBodySchema),
	userController.createUser
);
router.put(
	'/user',
	validator.body(userDefaultBodySchema),
	userController.updateUser
);
router.delete(
	'/user',
	validator.query(userQuerySchema),
	userController.deleteUser
);

module.exports = router;
