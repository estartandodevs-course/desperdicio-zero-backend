const productRepository = require('../../db/models/product');
const assemblerProducts = require('./assemblers/assembler-products');

const loadAllProducts = async () => {
	const productsList = await productRepository.findAll();
	console.log(typeof assemblerProducts);
	return await assemblerProducts(productsList);
};

module.exports = {
	loadAllProducts,
};
