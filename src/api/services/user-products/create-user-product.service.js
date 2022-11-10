const userProductsRepository = require('../../db/models/userProducts');

const createUserProducts = async (user_id, product_id) => {
	const createdUserProductsRelation = await userProductsRepository.create({
		user_id: user_id,
		product_id: product_id,
	});
	return createdUserProductsRelation;
};

module.exports = { createUserProducts };
