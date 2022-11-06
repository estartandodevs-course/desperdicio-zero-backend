const productRepository = require('../../db/models/product');

const loadAllProducts = async () => {
	const productsList = await productRepository.findAll();

	return productsList;
};

module.exports = { loadAllProducts };
