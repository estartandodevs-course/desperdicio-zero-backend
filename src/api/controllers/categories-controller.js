const { loadAllCategories } = require('../services/index');
const createCategories = require('../services/categories/create-categories.service');

const getCategories = async (req, res) => {
	try {
		const products = await loadAllCategories();
		if (!products.length) {
			await createCategories();
		}
		res.json(products);
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_ProductS');
	}
};

module.exports = {
	getCategories,
};
