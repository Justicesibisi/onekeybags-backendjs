// routes/index.js  
const express = require('express');  
const router = express.Router();  
const UserController = require('../controllers/UserController');  
const ProductController = require('../controllers/ProductController');  
const auth = require('../middleware/auth');  
  
router.post('/users', UserController.createUser);  
router.get('/users', UserController.getUsers);  
router.get('/users/:id', UserController.getUser);  
router.put('/users/:id', UserController.updateUser);  
router.delete('/users/:id', UserController.deleteUser);  
  
router.post('/products', auth, ProductController.createProduct);  
router.get('/products', auth, ProductController.getProducts);  
router.get('/products/:id', auth, ProductController.getProduct);  
router.put('/products/:id', auth, ProductController.updateProduct);  
router.delete('/products/:id', auth, ProductController.deleteProduct);  
  
module.exports = router;  
