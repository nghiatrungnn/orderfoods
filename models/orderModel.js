const mongoose = require('mongoose');
const config = require('../config/config');

// // Kết nối đến MongoDB
// mongoose.connect(config.database.uri, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Kết nối MongoDB thành công'))
//   .catch(err => console.error('Lỗi kết nối MongoDB:', err));

// Định nghĩa schema cho Order
const orderSchema = new mongoose.Schema({
  foodItem: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: 'pending' // Trạng thái mặc định
  }
}, {
  timestamps: true // Thêm timestamp cho đơn hàng
});

// Tạo model từ schema
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
