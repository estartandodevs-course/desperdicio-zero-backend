const {
	getAllFilterCategories,
	getAllOutOfDateProducts,
} = require('../services/index');

const getFruitsAndVegetables = async (req, res) => {
	try {
		const products = await getAllFilterCategories(1);
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
		const products = await getAllFilterCategories(2);
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
		const products = await getAllFilterCategories(3);
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
		const products = await getAllFilterCategories(4);
		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message:
				error?.message || 'ERROR_TO_FILTER_GRAINS_CEREALS_AND_FLOURS',
		});
	}
};

const getOutOfDateProducts = async (req, res) => {
	try {
		const { user_id } = req.params;
		const products = await getAllOutOfDateProducts(user_id);
		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_FILTER_PRODUCTS_OUT_OF_DATE',
		});
	}
};

module.exports = {
	getFruitsAndVegetables,
	getColdCutsAndMeats,
	getDrinksAndOthers,
	getGrainsCerealsAndFlours,

	getOutOfDateProducts,
};
