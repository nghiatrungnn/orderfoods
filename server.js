const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');
const config = require('./config/config');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Sử dụng các route đã định nghĩa
app.use('/api', orderRoutes);

// Khởi động server
const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
