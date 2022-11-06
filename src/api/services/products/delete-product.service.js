const productRepository = require('../../db/models/product');

const deleteProducts = async (id) => {
	const deletedProduct = await productRepository.destroy({
		where: { id },
	});
	if (!deletedProduct) throw new Error('Product do not exists');
};

module.exports = { deleteProducts };
