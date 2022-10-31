const express = require('express');
const router = express.Router({});
const userController = require('../controllers/user-controller');

//TODO: implementar validador para rotas parametrizadas

router.get('/user', userController.getAllUsers);
router.post('/user', userController.createUser);

module.exports = router;
