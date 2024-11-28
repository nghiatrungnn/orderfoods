const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const router = express.Router();

// Đặt hàng mới
router.post('/orders', createOrder);

// Lấy danh sách đơn hàng
router.get('/orders', getOrders);

module.exports = router;
