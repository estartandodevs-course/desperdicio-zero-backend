const productRepository = require('../../db/models/product');
const { loadAllCategories } = require('../categories/load-categories.service');
const { createCategories } = require('../categories/create-categories.service');
const {
	createUserProducts,
} = require('../user-products/create-user-product.service');
const {
	loadAllUnitMeasurements,
} = require('../measurement/load-unit-measurements.service');
const {
	createMeasurements,
} = require('../measurement/create-unit-measurement.service');

const createProducts = async (
	user_id,
	category_id,
	name,
	validity,
	location,
	price,
	unit_measurement_id,
	unit
) => {
	if (validity.getTime() < new Date()) {
		throw new Error('Product is out of date');
	}

	const categories = await loadAllCategories();
	if (!categories.length) {
		await createCategories();
	}
	const measurements = await loadAllUnitMeasurements();
	if (!measurements.length) {
		await createMeasurements();
	}
	const createdProduct = await productRepository.create({
		category_id,
		name,
		validity,
		location,
		price,
		unit_measurement_id,
		unit,
	});

	await createUserProducts(user_id, createdProduct.id);

	return createdProduct;
};

module.exports = { createProducts };
