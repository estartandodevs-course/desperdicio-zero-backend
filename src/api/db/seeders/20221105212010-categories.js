'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'categories',
			[
				{
					id: 1,
					name: 'fruits_and_vegetables',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: 2,
					name: 'cold_cuts_and_meat',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: 3,
					name: 'drinks_and_others',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					id: 4,
					name: 'grains_cereals_and_flours',
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		queryInterface.bulkDelete('categories', null, {});
	},
};
