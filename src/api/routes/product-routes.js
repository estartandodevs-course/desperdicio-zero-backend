const express = require('express');
const router = express.Router({});
const { createValidator } = require('express-joi-validation');
const validator = createValidator({});
const {
	productQuerySchema,
	productCompleteBodySchema,
	productBodySchema,
} = require('../middleware/product-validator');
const productController = require('../controllers/products-controller');

router.get(
	'/product',
	validator.query(productQuerySchema),
	productController.getProductById
);
router.get('/products', productController.getAllProducts);
router.post(
	'/product',
	validator.body(productBodySchema),
	productController.createProduct
);
router.put(
	'/product',
	validator.body(productCompleteBodySchema),
	productController.updateProduct
);
router.delete(
	'/product',
	validator.query(productQuerySchema),
	productController.deleteProduct
);

module.exports = router;
