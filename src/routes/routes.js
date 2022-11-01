const express = require("express");
const router = express.Router({});
const { createValidator } = require('express-joi-validation');
const validador = createValidator ({});
const { userQuerySchema, userDefaultBodySchema } = require('../middleware/validator')
const userController = require('../controllers/user-controller');

//TODO: implementar validador para rotas parametrizadas

router.get('/crate-user.service', validator.query(userQuerySchema), userController.getAllUsers);
router.post('/crate-user.service', validator.body(userDefaultBodySchema), userController.createUser);
router.put('/crate-user.service', validator.body(userDefaultBodySchema), controller.updateUser)

module.exports = router;