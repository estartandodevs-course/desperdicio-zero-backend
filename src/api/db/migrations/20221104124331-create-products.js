'use strict';

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('products', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			category_id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'categories',
					key: 'id',
				},
			},
			name: {
				type: Sequelize.STRING,
			},
			validity: {
				type: Sequelize.DATE,
			},
			location: {
				type: Sequelize.STRING,
			},
			price: {
				type: Sequelize.FLOAT,
			},
			weight: {
				type: Sequelize.FLOAT,
			},
			weightUnit: {
				type: Sequelize.STRING,
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('products');
	},
};
