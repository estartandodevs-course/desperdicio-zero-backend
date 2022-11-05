const productRepository = require('../../db/models/product');

const createProducts = async (
	name,
	validity,
	location,
	price,
	weight,
	weightUnit
) => {
	try {
		const createdProduct = await productRepository.create({
			name,
			validity,
			location,
			price,
			weight,
			weightUnit,
		});
		return createdProduct;
	} catch (error) {
		throw new Error('server error');
	}
};

module.exports = { createProducts };
