const categoriesRepository = require('../../db/models/categories');

const loadAllCategories = async () => {
	const categoriesList = await categoriesRepository.findAll();
	return categoriesList;
};

module.exports = { loadAllCategories };
