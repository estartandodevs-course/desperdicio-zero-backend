const {
	loadAllCategories,
} = require('../../categories/load-categories.service');

const unitMeasurementRespository = require('../../../db/models/unitMeasurement');

const loadAllUniMeasurements = async () => {
	const allUnitMeasurements = await unitMeasurementRespository.findAll();
	return allUnitMeasurements;
};

const mapReference = (allUnitMeasurement) => {
	return allUnitMeasurement.reduce((acc, item) => {
		const currentItem = item.dataValues;
		acc[currentItem.id] = currentItem;
		return acc;
	}, {});
};

const assemblerPrice = (price) => {
	const newPrice = (price / 100).toFixed(2);
	return `R$ ${newPrice}`;
};

const assemblerProducts = async (allProducts) => {
	const allUnitMeasurements = await loadAllUniMeasurements();
	const allCategories = await loadAllCategories();
	const mapAllCategories = await mapReference(allCategories);
	const mapAllUnitMesaurement = await mapReference(allUnitMeasurements);
	return allProducts.map(async (product) => {
		const unitMeasurement = await mapAllUnitMesaurement[
			product.unit_measurement_id
		];
		const category = await mapAllCategories[product.category_id];
		return {
			id: product.id,
			category: category.name,
			name: product.name,
			validity: product.validity,
			location: product.location,
			price: assemblerPrice(product.price),
			unit: `${product.unit}${unitMeasurement.name}`,
		};
	});
};

module.exports = assemblerProducts;
