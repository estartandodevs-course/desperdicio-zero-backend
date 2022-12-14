const {
	createProducts,
	loadAllProducts,
	updateProducts,
	getProductByID,
	deleteProducts,
} = require('../services/index');

const getAllProducts = async (req, res) => {
	try {
		const products = await loadAllProducts();
		res.json(products);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_GET_ALL_PRODUCTS',
		});
	}
};

const getProductById = async (req, res) => {
	try {
		const id = req.query.id;
		const product = await getProductByID(id);
		res.json(product);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_GET_PRODUCT_BY_ID',
		});
	}
};

const createProduct = async (req, res) => {
	try {
		const {
			user_id,
			category_id,
			name,
			validity,
			location,
			price,
			unit_measurement_id,
			unit,
		} = req.body;
		const product = await createProducts(
			user_id,
			category_id,
			name,
			validity,
			location,
			price,
			unit_measurement_id,
			unit
		);
		res.json(product);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_CREATE_PRODUCT',
		});
	}
};

const updateProduct = async (req, res) => {
	try {
		const updatedProduct = req.body;
		const id = req.body.id;
		await updateProducts(updatedProduct, id);
		res.json();
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_UPDATE_PRODUCT',
		});
	}
};

const deleteProduct = async (req, res) => {
	try {
		const id = req.query.id;
		await deleteProducts(id);
		res.json();
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_DELETE_PRODUCT',
		});
	}
};

module.exports = {
	getAllProducts,
	createProduct,
	deleteProduct,
	getProductById,
	updateProduct,
};
