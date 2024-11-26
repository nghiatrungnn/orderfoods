// app.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tourRoutes = require('./routes/orderRoutes'); // Đường dẫn tới file routes của bạn

const app = express(); // Khởi tạo ứng dụng Express

// Middleware
app.use(cors()); // Sử dụng middleware CORS
app.use(bodyParser.json()); // Phân tích dữ liệu JSON

// Sử dụng các route đã định nghĩa
app.use('/api', tourRoutes);

// Xử lý lỗi
app.use((err, req, res, next) => {
  console.error(err.stack); // In lỗi ra console
  res.status(500).send('Có lỗi xảy ra!');
});

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});

require('./db'); // Đảm bảo đường dẫn đúng
