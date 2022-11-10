const productRepository = require('../../db/models/product');
const {
	deleteUserProductsByProduct,
} = require('../user-products/delete-user-product.service');

const deleteProducts = async (id) => {
	await productRepository.destroy({
		where: { id },
	});
	await deleteUserProductsByProduct(id);
};

module.exports = { deleteProducts };
