const Order = require('../models/orderModel');

// Lấy tất cả đơn hàng
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find(); // Tìm tất cả đơn hàng
    res.json(orders);
  } catch (err) {
    console.error('Lỗi khi lấy dữ liệu:', err);
    res.status(500).json({ error: 'Lỗi khi lấy dữ liệu' });
  }
};

// Thêm đơn hàng mới
exports.createOrder = async (req, res) => {
  const { foodItem, quantity, customerName, address } = req.body;

  try {
    const newOrder = await Order.create({
      foodItem,
      quantity,
      customerName,
      address
    });
    res.status(201).json(newOrder);
  } catch (err) {
    console.error('Lỗi khi tạo đơn hàng:', err);
    res.status(500).json({ error: 'Lỗi khi tạo đơn hàng' });
  }
};
