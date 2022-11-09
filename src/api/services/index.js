const { loadAllUsers } = require('./users/load-users.service');
const { createUsers } = require('./users/create-user.service');
const { updateUsers } = require('./users/update-user.service');
const { getUserByID } = require('./users/get-user-by-id.service');
const { deleteUsers } = require('./users/delete-user.service');
const {
	allUserProducts,
} = require('./user-products/load-all-user-products.service');

const {
	loadAllProducts,
	loadAllUniMeasurements,
} = require('./products/load-products.service');
const { createProducts } = require('./products/create-product.service');
const { updateProducts } = require('./products/update-product.service');
const { getProductByID } = require('./products/get-product-by-id.service');
const { deleteProducts } = require('./products/delete-product.service');

const { loadAllCategories } = require('./categories/load-categories.service');
const { createCategories } = require('./categories/create-categories.service');

const {
	getAllFilterProducts,
} = require('./filters/get-filter-products.service');
const assemblerProducts = require('./products/assemblers-products/assembler-product.service');

module.exports = {
	loadAllUsers,
	createUsers,
	updateUsers,
	getUserByID,
	deleteUsers,
	allUserProducts,

	assemblerProducts,
	loadAllProducts,
	createProducts,
	updateProducts,
	getProductByID,
	deleteProducts,

	loadAllCategories,
	createCategories,
	loadAllUniMeasurements,
	getAllFilterProducts,
};
