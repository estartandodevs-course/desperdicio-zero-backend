const productRepository = require('../../db/models/product');
const {
	assemblerProducts,
} = require('./assemblers-products/assembler-product.service');

const loadAllProducts = async () => {
	const productsList = await productRepository.findAll();
	return await assemblerProducts(productsList);
};

module.exports = {
	loadAllProducts,
};
