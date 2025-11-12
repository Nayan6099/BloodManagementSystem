const express = require('express');
const router = express.Router();
const bloodController = require('../controllers/bloodController');
const { authenticateToken } = require('../middleware/auth');

router.post('/add', authenticateToken, bloodController.addBlood);
router.get('/available/:bloodGroup', bloodController.getAvailableBlood);
router.get('/history/:donorId', authenticateToken, bloodController.getDonorHistory);
router.post('/request', authenticateToken, bloodController.requestBlood);

module.exports = router;