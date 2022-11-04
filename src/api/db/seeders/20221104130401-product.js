'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'products',
			[
				{
					name: 'tomato',
					validity: '2023/01/11',
					location: 'pantry',
					price: '4.00',
					weight: '100.00',
					weightUnit: 'G',
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		queryInterface.bulkDelete('products', null, {});
	},
};
