const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('./db');
const orderRoutes = require('./routes/orderRoutes');
const config = require('./config/config');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api', orderRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Có lỗi xảy ra!');
});

const PORT = config.server.port;
app.listen(PORT, () => {
  console.log(`Server đang chạy trên cổng ${PORT}`);
});
