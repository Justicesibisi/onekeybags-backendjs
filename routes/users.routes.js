const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const authenticate = require('../middleware/auth');
const authorize = require('../middleware/authorize');
const roles = require('../utils/roles');

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/get/:userId', authenticate, authorize(roles.ADMIN), userController.getUser);
router.put('/update/:userId', authenticate, authorize(roles.USER), userController.updateUser);
router.delete('/delete/:userId', authenticate, authorize(roles.ADMIN), userController.deleteUser);

module.exports = router;