const config = {
  database: {
    uri: "mongodb+srv://trung98213:<db_password>@trung.21wj1.mongodb.net/?retryWrites=true&w=majority&appName=Trung" // Thay <your_password> bằng mật khẩu thực tế
  },
  server: {
    port: 5000 // Cổng server
  }
};

module.exports = config;
