const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
router.post('/payments/create', orderController.createPaymentIntent);
router.get('/orders/:userId', orderController.getOrders);
module.exports = router;