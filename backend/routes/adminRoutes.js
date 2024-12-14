const express = require('express');
const { registerAdmin, loginAdmin, getAdminDetails } = require('../controllers/adminController');
const { authenticate } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', registerAdmin); // Admin registration
router.post('/login', loginAdmin); // Admin login
router.get('/profile', authenticate, getAdminDetails); // Fetch admin profile

module.exports = router;
