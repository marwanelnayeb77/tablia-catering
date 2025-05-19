const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

console.log("Starting server...");

// تحميل متغيرات البيئة
dotenv.config();

// الاتصال بقاعدة البيانات
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // استبدال body-parser

// الراوتس
const foodRoutes = require('./routes/foodroutes');
app.use('/api/food', foodRoutes);

app.listen(PORT, () => {
  console.log("Server running on port ${PORT}");
});

