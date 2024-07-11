const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const authenticate = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

router.get('/get', productController.getProducts);
router.post('/create', authenticate, authorize(roles.ADMIN), productController.createProduct);
router.put('/update/:id', authenticate, authorize(roles.ADMIN), productController.updateProduct);
router.delete('/delete/:id', authenticate, authorize(roles.ADMIN), productController.deleteProduct);

module.exports = router;
