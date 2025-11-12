const express = require('express');
const router = express.Router();
const blockchainController = require('../controllers/blockchainController');

router.post('/add-blood', blockchainController.addBlood);
router.get('/get-blood/:id', blockchainController.getBlood);
router.post('/transfer-blood', blockchainController.transferBlood);

module.exports = router;