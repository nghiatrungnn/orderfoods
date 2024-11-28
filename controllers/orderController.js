const Order = require('../models/Order');

// Đặt hàng mới
const createOrder = async (req, res) => {
  console.log("Dữ liệu nhận được:", req.body); // Log dữ liệu nhận được

  const { foodItem, quantity, customerName, address, status } = req.body;

  // Kiểm tra thông tin đầu vào
  if (!foodItem || !quantity || !customerName || !address) {
    return res.status(400).send('Thiếu thông tin cần thiết.');
  }

  const newOrder = new Order({ foodItem, quantity, customerName, address, status });

  try {
    await newOrder.save();
    res.status(201).send(newOrder);
  } catch (error) {
    console.error("Lỗi khi lưu đơn hàng:", error); // Log lỗi
    res.status(400).send(error);
  }
};

// Lấy danh sách đơn hàng
const getOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).send(orders);
  } catch (error) {
    console.error("Lỗi khi lấy danh sách đơn hàng:", error); // Log lỗi
    res.status(500).send(error);
  }
};

module.exports = {
  createOrder,
  getOrders
};
