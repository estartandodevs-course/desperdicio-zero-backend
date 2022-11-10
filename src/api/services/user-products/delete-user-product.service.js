const userProductsRepository = require('../../db/models/userProducts');

const deleteUserProductsByProduct = async (product_id) => {
	await userProductsRepository.destroy({
		where: {
			product_id: product_id,
		},
	});
};

const deleteUserProductsByUser = async (user_id) => {
	await userProductsRepository.destroy({
		where: {
			user_id: user_id,
		},
	});
};

module.exports = { deleteUserProductsByProduct, deleteUserProductsByUser };
