const productRepository = require('../../db/models/product');
const { loadAllCategories } = require('../categories/load-categories.service');
const createCategories = require('../categories/create-categories.service');
const createUserProducts = require('../user-products/create-user-product.service');
const createMeasurements = require('../measurement/load-unit-measurements.service');
const loadAllMeasurements = require('../measurement/create-unit-measurement.service');

const createProducts = async (
	id,
	user_id,
	category_id,
	name,
	validity,
	location,
	price,
	unit_measurement_id,
	unit
) => {
	const categories = await loadAllCategories();
	if (!categories.length) {
		await createCategories();
	}
	const measurements = await loadAllMeasurements();
	if (!measurements.length) {
		await createMeasurements();
	}
	const createdProduct = await productRepository.create({
		id,
		category_id,
		name,
		validity,
		location,
		price,
		unit_measurement_id,
		unit,
	});

	await createUserProducts(user_id, id);

	return createdProduct;
};

module.exports = { createProducts };
