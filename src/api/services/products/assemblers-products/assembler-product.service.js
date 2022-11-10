const {
	loadAllCategories,
} = require('../../categories/load-categories.service');
const {
	loadAllUnitMeasurements,
} = require('../../measurement/load-unit-measurements.service');

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
	const allUnitMeasurements = await loadAllUnitMeasurements();
	const allCategories = await loadAllCategories();
	const mapAllCategories = mapReference(allCategories);
	const mapAllUnitMesaurement = mapReference(allUnitMeasurements);
	return allProducts.map((product) => {
		const unitMeasurement =
			mapAllUnitMesaurement[product.unit_measurement_id];
		const category = mapAllCategories[product.category_id];
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

module.exports = { assemblerProducts };
