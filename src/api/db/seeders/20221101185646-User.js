'use strict';

const uuid4 = require('uuid4');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'users',
			[
				{
					id: uuid4(),
					first_name: 'Jane Doe',
					email_adress: 'janedoe@example.com',
					phone_number: '21972713315',
					birthday: '1977/10/11',
					sex: 'feme',
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('users', null, bulkDeleteOptions);
	},
};
