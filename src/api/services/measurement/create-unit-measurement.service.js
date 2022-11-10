const measurementsRepository = require('../../db/models/unitMeasurement');

const createMeasurements = async () => {
	const createdMeasurements = [
		await measurementsRepository.create({
			name: 'mg',
		}),
		await measurementsRepository.create({
			name: 'g',
		}),
		await measurementsRepository.create({
			name: 'kg',
		}),
		await measurementsRepository.create({
			name: 'ml',
		}),
		await measurementsRepository.create({
			name: 'l',
		}),
		await measurementsRepository.create({
			name: 'und',
		}),
		await measurementsRepository.create({
			name: 'lb',
		}),
		await measurementsRepository.create({
			name: 'oz',
		}),
		await measurementsRepository.create({
			name: 'gal',
		}),
		await measurementsRepository.create({
			name: 'qt',
		}),
		await measurementsRepository.create({
			name: 'fl. oz',
		}),
	];
	return createdMeasurements;
};

module.exports = { createMeasurements };
