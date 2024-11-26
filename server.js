const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./config/config'); // Kết nối MongoDB
const orderRoutes = require('./routes/orderRoutes'); // Đường dẫn tới các routes
const config = require('./config/config'); // Cấu hình

const app = express();

// Middleware
app.use(cors()); // Cho phép CORS
app.use(bodyParser.json()); // Middleware để parse JSON

// Sử dụng các route đã định nghĩa
app.use('/api', orderRoutes);

// Khởi động server
const PORT = config.server.port; // Lấy cổng từ cấu hình
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
