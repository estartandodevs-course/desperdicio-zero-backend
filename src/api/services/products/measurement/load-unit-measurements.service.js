const unitMeasurementRepository = require('../../../db/models/unitMeasurement');

const loadAllUnitMeasurements = async () => {
	const allUnitMeasurements = await unitMeasurementRepository.findAll();
	return allUnitMeasurements;
};

module.exports = { loadAllUnitMeasurements };
