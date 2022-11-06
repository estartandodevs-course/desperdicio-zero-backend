const express = require('express');
const router = express.Router({});
const filterController = require('../controllers/filters-controller');

router.get(
	'/filter/fruits-and-vegetables',
	filterController.getFruitsAndVegetables
);
module.exports = router;
