const productRepository = require('../../db/models/product');

const getProductByID = async (id) => {
	const productData = await productRepository.findByPk(id);
	if (productData === null) throw new Error('Product do not exists');

	return productData;
};

module.exports = { getProductByID };
