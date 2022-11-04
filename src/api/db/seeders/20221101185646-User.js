'use strict';

const { encryptPassword } = require('../../utils/encrypt-password');
const uuid = require('uuid');

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'users',
			[
				{
					id: uuid.v4(),
					first_name: 'Jane Doe',
					email_adress: 'janedoe@example.com',
					phone_number: '21972713315',
					birthday: '1977/10/11',
					sex: 'feme',
					password: await encryptPassword('sucodelimao'),
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
