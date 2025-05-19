const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  available: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Food', foodSchema);