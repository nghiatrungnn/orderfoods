const mongoose = require('mongoose');
const uri = "mongodb+srv://trung:<123>@cluster1.8ltwg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Kết nối đến MongoDB thành công!");
  })
  .catch(err => {
    console.error("Kết nối đến MongoDB thất bại:", err);
  });
