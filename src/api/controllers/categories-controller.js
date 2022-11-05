const { loadAllCategories } = require('../services/index');

const getCategories = async (req, res) => {
	try {
		const products = await loadAllCategories();
		res.json(products);
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_ProductS');
	}
};

module.exports = {
	getCategories,
};
