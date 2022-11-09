const UserProductsRepository = require('../../db/models/userProducts');
const { getUserByID } = require('../users/get-user-by-id.service');
const { getProductByID } = require('../products/get-product-by-id.service');
const {
	assemblerProducts,
} = require('../products/assemblers-products/assembler-product.service');

console.log('aa', typeof getUserByID);

const allUserProducts = async (id) => {
	const userProducts = await UserProductsRepository.findAll({
		where: {
			user_id: id,
		},
	});

	console.log('aa', typeof getUserByID(id));
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

module.exports = { allUserProducts };
