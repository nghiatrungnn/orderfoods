const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Định nghĩa các route cho đơn hàng
router.get('/orders', orderController.getAllOrders); // Lấy tất cả đơn hàng
router.post('/orders', orderController.createOrder);  // Thêm đơn hàng mới

module.exports = router;
