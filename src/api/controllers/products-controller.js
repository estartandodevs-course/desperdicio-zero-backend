const { createProducts, loadAllProducts } = require('../services/index');
const productRepository = require('../db/models/product');

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
	const id = req.query.id;
	const product = await productRepository.findByPk(id);
	res.json(product);
};

const createProduct = async (req, res) => {
	try {
		const {
			category_id,
			name,
			validity,
			location,
			price,
			weight,
			weightUnit,
		} = req.body;
		const product = await createProducts(
			category_id,
			name,
			validity,
			location,
			price,
			weight,
			weightUnit
		);
		res.json(product);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			message: error?.message || 'ERROR_TO_GET_PRODUCT_BY_ID',
		});
	}
};

const updateProduct = async (req, res) => {
	try {
		const updateProduct = req.body;
		const id = req.body.id;
		await productRepository.update(updateProduct, {
			where: { id },
		});
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
		await productRepository.destroy({
			where: { id },
		});
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
