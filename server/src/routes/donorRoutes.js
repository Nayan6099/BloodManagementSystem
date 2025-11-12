const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donorController');
const { authenticateToken } = require('../middleware/auth');

router.get('/profile/:id', authenticateToken, donorController.getDonorProfile);
router.put('/profile/:id', authenticateToken, donorController.updateDonorProfile);
router.get('/stats', authenticateToken, donorController.getDonorStats);

module.exports = router;