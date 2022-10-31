'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  User.init({
    first_name: DataTypes.STRING,
    family_name: DataTypes.STRING,
    email: DataTypes.STRING,
    birth_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};