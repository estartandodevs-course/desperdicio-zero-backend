const userRepository = require('../../db/models/user');
const {
	deleteUserProductsByUser,
} = require('../user-products/delete-user-product.service');

const deleteUsers = async (id) => {
	await userRepository.destroy({
		where: { id },
	});

	await deleteUserProductsByUser(id);
};

module.exports = { deleteUsers };
