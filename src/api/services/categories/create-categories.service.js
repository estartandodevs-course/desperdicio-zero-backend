const categoryRepository = require('../../db/models/categories');

const createCategories = async () => {
	const createdCategory = [
		await categoryRepository.create({
			name: 'fruits_and_vegetables',
		}),
		await categoryRepository.create({
			name: 'cold_cuts_and_meat',
		}),
		await categoryRepository.create({
			name: 'drinks_and_others',
		}),
		await categoryRepository.create({
			name: 'grains_cereals_and_flours',
		}),
	];
	return createdCategory;
};

module.exports = createCategories;
