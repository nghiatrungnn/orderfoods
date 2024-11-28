const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  foodItem: { type: String, required: true },
  quantity: { type: Number, required: true },
  customerName: { type: String, required: true },
  address: { type: String, required: true },
  status: { type: String, default: 'pending' },
  orderDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Order', orderSchema);
