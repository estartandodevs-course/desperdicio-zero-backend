const express = require('express');
const router = express.Router({});
const productController = require('../controllers/products-controller');

//TODO: implementar validator

router.get('/product/:id', productController.getProductById);
router.get('/products', productController.getAllProducts);
router.post('/product', productController.createProduct);
router.put('/product', productController.updateProduct);
router.delete('/product/:id', productController.deleteProduct);

module.exports = router;
