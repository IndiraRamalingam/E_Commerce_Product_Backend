const express = require('express')
const router = express.Router();
const paymentController = require('../controllers/paymentController');

router.post('/create-order', paymentController.createOrder);
router.get('/get-razorpay-key', paymentController.getKey);
router.post('/pay-order', paymentController.payOrder);
router.get('/list-orders/:id', paymentController.getListOrders)

module.exports = router;