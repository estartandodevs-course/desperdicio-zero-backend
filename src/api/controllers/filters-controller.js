const { getAllFruitsAndVegetables } = require('../services/index');

const getFruitsAndVegetables = async (req, res) => {
	try {
		const products = await getAllFruitsAndVegetables();
		res.json(products);
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_FILTER_FRUITS_AND_VEGETABLES');
	}
};

module.exports = {
	getFruitsAndVegetables,
};
