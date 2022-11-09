const express = require('express');
const router = express.Router({});
const filterController = require('../controllers/filters-controller');

router.get(
	'/filter/fruits-and-vegetables',
	filterController.getFruitsAndVegetables
);
router.get('/filter/cold_cuts_and_meat', filterController.getColdCutsAndMeats);
router.get('/filter/drinks_and_others', filterController.getDrinksAndOthers);
router.get(
	'/filter/grains_cereals_and_flours',
	filterController.getGrainsCerealsAndFlours
);

router.get('/filter/out-of-date', filterController.getOutOfDateProducts);
module.exports = router;
