'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('users', {
			id: {
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
				unique: true,
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
				unique: true,
			},
			address: {
				type: Sequelize.STRING,
			},
			birthday: {
				type: Sequelize.DATE,
				allowNull: false,
			},
			sex: Sequelize.STRING,
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			created_at: {
				type: Sequelize.DATE,
			},
			updated_at: {
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('users');
	},
};
