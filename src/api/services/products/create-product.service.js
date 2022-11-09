const productRepository = require('../../db/models/product');
const createCategories = require('../categories/create-categories.service');
const createMeasurements = require('./measurement/create-unit-measurement.service');

const createProducts = async (
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
