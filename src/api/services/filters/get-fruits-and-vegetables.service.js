const productRepository = require('../../db/models/product');

const getAllFruitsAndVegetables = async () => {
	try {
		products = productRepository.findAll({
			where: { category_id: 1 },
		});
		return products;
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_FILTER_FRUITS_AND_VEGETABLES');
	}
};

module.exports = {
	getAllFruitsAndVegetables,
};
