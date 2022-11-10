const productRepository = require('../../db/models/product');
const UserProductsRepository = require('../../db/models/userProducts');
const Op = require('sequelize').Op;

const getAllOutOfDateProducts = async (user_id) => {
	user_products = await UserProductsRepository.findAll({
		where: {
			user_id: user_id,
		},
	});

	const data = user_products.map((item) => item.product_id);

	products = await productRepository.findAll({
		where: {
			[Op.and]: [
				{
					id: {
						[Op.in]: data,
					},
				},
				{
					validity: {
						[Op.lt]: new Date(),
					},
				},
			],
		},
	});

	if (products.length === 0)
		throw new Error('There is no out of date products');

	let totalCashLost = 0;
	for (product of products) {
		totalCashLost += product.price / 100;
	}

	products.push({
		total_cash: `R$${parseFloat(totalCashLost)}`,
	});

	return products;
};

module.exports = {
	getAllOutOfDateProducts,
};
