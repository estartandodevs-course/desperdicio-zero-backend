const express = require('express');
const router = express.Router({});
const { createValidator } = require('express-joi-validation');
const validator = createValidator({});
const {
	userParamsSchema,
	userDefaultBodySchema,
} = require('../middleware/userValidator');
const userController = require('../controllers/user-controller');

//TODO: implementar validator

router.get(
	'/user/:id',
	validator.params(userParamsSchema),
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
	'/user/:id',
	validator.params(userParamsSchema),
	userController.deleteUser
);

module.exports = router;
