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
					first_name: 'Marcela Fernanda',
					family_name: 'Silva',
					email_adress: 'marcela.fernanda@example.com',
					phone_number: '21972717315',
					birthday: '1977/10/11',
					sex: 'female',
					password: await encryptPassword('sucodelimao'),
					created_at: new Date(),
					updated_at: new Date(),
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('users', null, {});
	},
};
