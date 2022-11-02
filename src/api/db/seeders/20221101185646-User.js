'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		queryInterface.bulkInsert(
			'users',
			[
				{
					first_name: 'Jane Doe',
					email: 'janedoe@example.com',
					phone_number: '21972713315',
					birth_date: '1977/10/11',
					sex: 'feme',
				},
				{
					first_name: 'Jon Doe',
					email: 'jondoe@example.com',
					phone_number: '21972713316',
					birth_date: '1975/12/15',
					sex: 'male',
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		queryInterface.bulkDelete('users', null, {});
	},
};
