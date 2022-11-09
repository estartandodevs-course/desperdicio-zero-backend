const productRepository = require('../../db/models/product');
const { loadAllCategories } = require('../categories/load-categories.service');

const unitMeasurementRespository = require('../../db/models/unitMeasurement');


const loadAllUniMeasurements = async () => {
	const allUnitMeasurements = await unitMeasurementRespository.findAll();
	return allUnitMeasurements;
};

const mapReference = allUnitMeasurement => {
	return allUnitMeasurement.reduce((acc, item) => {
		const currentItem = item.dataValues
		acc[currentItem.id] = currentItem;
		return acc;
	}, {});
}

const assemblerPrice = price => {
	const newPrice = (price / 100).toFixed(2);
	return `R$ ${newPrice}`;
};

const assemblerProducts = async (allProducts) => {
	const allUnitMeasurements = await loadAllUniMeasurements();
	const allCategories = await loadAllCategories();
	const mapAllCategories = await mapReference(allCategories);
	const mapAllUnitMesaurement = mapReference(allUnitMeasurements);
	return allProducts.map((product) => {
		const unitMeasurement = mapAllUnitMesaurement[product.unit_measurement_id];
		const category = mapAllCategories[product.category_id];
		return {
			id: product.id,
			category: category.name,
			name: product.name,
			validity: product.validity,
			location: product.location,
			price: assemblerPrice(product.price),
			unit: `${product.unit}${unitMeasurement.name}`
		}
	});
}

const loadAllProducts = async () => {
	const productsList = await productRepository.findAll();
	return assemblerProducts(productsList);
};

module.exports = {
	loadAllProducts,
	loadAllUniMeasurements,
	assemblerProducts
};
