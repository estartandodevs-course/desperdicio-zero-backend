const productRepository = require('../../db/models/product');

const createProducts = async (
	category_id,
	name,
	validity,
	location,
	price,
	unit_measurement_id,
	unit
) => {
	// await createCategories()
	const createdProduct = await productRepository.create({
		category_id,
		name,
		validity,
		location,
		price,
		unit_measurement_id,
		unit,
	});
	return createdProduct;
};

module.exports = { createProducts };
