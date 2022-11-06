const productRepository = require('../../db/models/product');

const updateProducts = async (updatedProduct, id) => {
	try {
		await productRepository.update(updatedProduct, {
			where: { id },
		});
	} catch (error) {
		throw new Error('server error');
	}
};

module.exports = { updateProducts };
