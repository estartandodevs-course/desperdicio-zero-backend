const { loadAllCategories } = require('../services/index');

const getCategories = async (req, res) => {
	try {
		const categories = await loadAllCategories();
		res.json(categories);
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_CATEGORIES');
	}
};

module.exports = {
	getCategories,
};
