'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				primaryKey: true,
				type: Sequelize.UUID,
				allowNull: false
			},
			first_name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			family_name: {
				type: Sequelize.STRING,
			},
			email_adress: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			phone_number: {
				type: Sequelize.STRING(11),
				allowNull: false,
			},
			birthday: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			sex: Sequelize.STRING,
			created_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	},
};
