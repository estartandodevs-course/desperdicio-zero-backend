const { createProducts } = require('../services/index');
const productRepository = require('../db/models/product');

const getAllProducts = async (req, res) => {
	try {
		const products = await productRepository.findAll();
		res.json(products);
	} catch (error) {
		console.log(error);
		throw new Error('ERROR_TO_GET_ALL_ProductS');
	}
};

const getProductById = async (req, res) => {
	const id = req.query.id;
	const product = await productRepository.findByPk(id);
	res.json(product);
};

const createProduct = async (req, res) => {
	try {
		const { name, validity, location, price, weight, weightUnit } =
			req.body;
		const product = await createProducts(
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
		throw new Error('ERROR_TO_GET_ALL_ProductS');
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
		throw new Error('ERROR_TO_GET_ALL_ProductS');
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
		throw new Error('ERROR_TO_GET_ALL_ProductS');
	}
};

module.exports = {
	getAllProducts,
	createProduct,
	deleteProduct,
	getProductById,
	updateProduct,
};
