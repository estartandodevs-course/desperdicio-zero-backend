const productRepository = require('../../db/models/product');

const getAllFilterProducts = async (category_id) => {
	products = await productRepository.findAll({
		where: { category_id },
	});
	if (products.length === 0)
		throw new Error('There is no products in this category');
	return products;
};

module.exports = {
	getAllFilterProducts,
};
