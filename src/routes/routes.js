const express = require('express');
const router = express.Router({});
const userController = require('../controllers/user-controller');

//TODO: implementar validator

router.get('/user/:id', userController.getUserById);
router.get('/users', userController.getAllUsers);
router.post('/user', userController.createUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;