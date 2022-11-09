const productRepository = require('../../db/models/product');
const Op = require('sequelize').Op;

const getAllOutOfDateProducts = async () => {
	products = await productRepository.findAll({
		where: {
			validity: {
				[Op.lt]: new Date(),
			},
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
