'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'Users',
      [
        {
          first_name: 'Jane Doe',
          email: 'janedoe@example.com',
          birth_date: 1977/10/11,
        },
        {
          first_name: 'Jon Doe',
          email: 'jondoe@example.com',
          birth_date: 1975/12/15,
        },
      ],
      {},
    )
    
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', null, {})
  }
};
