const measurementsRepository = require('../../../db/models/unitMeasurement');

const createMeasurements = async () => {
	const createdMeasurements = [
		await measurementsRepository.create({
			name: 'KG',
		}),
		await measurementsRepository.create({
			name: 'G',
		}),
		await measurementsRepository.create({
			name: 'L',
		}),
		await measurementsRepository.create({
			name: 'ML',
		}),
	];
	return createdMeasurements;
};

module.exports = createMeasurements;
