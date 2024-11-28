require('dotenv').config(); // Thêm dòng này ở đầu tệp
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Kết nối tới MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 20000, // Thay đổi thời gian timeout ở đây
  tls:true,
});


// Middleware
app.use(bodyParser.json());
app.use('/api', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
