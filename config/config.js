const config = {
  database: {
    uri: 'mongodb://localhost:27017/foodOrderApp', // Địa chỉ kết nối MongoDB
  },
  server: {
    port: 5000 // Cổng server
  }
};

module.exports = config;
