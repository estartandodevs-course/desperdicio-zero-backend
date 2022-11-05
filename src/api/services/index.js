const { loadAllUsers } = require('./users/load-users.service');
const { createUsers } = require('./users/create-user.service');
const { updateUsers } = require('./users/update-user.service');
const { getUserByID } = require('./users/get-user-by-id.service');
const { deleteUsers } = require('./users/delete-user.service');

const { loadAllProducts } = require('./products/load-products.service');
const { createProducts } = require('./products/create-product.service');
const { updateProducts } = require('./products/update-product.service');

const { loadAllCategories } = require('./categories/load-categories.service');

module.exports = {
	loadAllUsers,
	createUsers,
	updateUsers,
	getUserByID,
	deleteUsers,

	loadAllProducts,
	createProducts,
	updateProducts,

	loadAllCategories,
};
