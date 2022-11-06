'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'categories',
			[
				{
					name: 'fruits_and_vegetables',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'cold_cuts_and_meat',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
					name: 'drinks_and_others',
					created_at: new Date(),
					updated_at: new Date(),
				},
				{
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
