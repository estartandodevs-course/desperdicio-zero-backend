const userRepository = require('../../db/models/user');
const UserProductsRepository = require('../../db/models/userProducts');
const { getUserByID } = require('./get-user-by-id.service');
const { getProductByID } = require('../products/get-product-by-id.service');
const { assemblerProducts } = require('../products/load-products.service');

const loadAllUsers = async () => {
	const usersList = await userRepository.findAll();

	return usersList;
};

const allUserProducts = async (id) => {
	const userProducts = await UserProductsRepository.findAll({
		where: {
			user_id: Number(id),
		},
	});

	const user = await getUserByID(id);
	const productsByUser = await Promise.all(
		userProducts.map(async (userProduct) => {
			const product = await getProductByID(
				Number(userProduct.product_id)
			);
			return product;
		})
	);
	const products = await assemblerProducts(productsByUser);
	return { user, products };
};

module.exports = {
	loadAllUsers,
	allUserProducts,
};
