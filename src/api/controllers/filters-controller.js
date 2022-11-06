const { getAllFilterProducts } = require('../services/index');

const getFruitsAndVegetables = async (req, res) => {
	try {
		const products = await getAllFilterProducts(1);
		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_FILTER_FRUITS_AND_VEGETABLES',
		});
	}
};

const getColdCutsAndMeats = async (req, res) => {
	try {
		const products = await getAllFilterProducts(2);
		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_FILTER_COLD_CUTS_AND_MEATS',
		});
	}
};

const getDrinksAndOthers = async (req, res) => {
	try {
		const products = await getAllFilterProducts(3);
		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_FILTER_DRINKS_AND_OTHERS',
		});
	}
};

const getGrainsCerealsAndFlours = async (req, res) => {
	try {
		const products = await getAllFilterProducts(4);
		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message:
				error?.message || 'ERROR_TO_FILTER_GRAINS_CEREALS_AND_FLOURS',
		});
	}
};

module.exports = {
	getFruitsAndVegetables,
	getColdCutsAndMeats,
	getDrinksAndOthers,
	getGrainsCerealsAndFlours,
};
