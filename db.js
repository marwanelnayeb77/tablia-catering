const mongoose = require("mongoose");

// فانكشن بتوصل بالداتا بيز
const connectDB = async () => {
  try {
    // بتاخد رابط الاتصال من ملف env
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(MongoDB Connected: ${conn.connection.host});
  } catch (error) {
    console.error(Error: ${error.message});
    process.exit(1); // يعني لو في مشكلة، نقفل السيرفر
  }
};

module.exports = connectDB;