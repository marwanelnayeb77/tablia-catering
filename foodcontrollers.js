const Food = require('../models/food');

// جلب كل الأصناف
exports.getAllFood = async (req, res) => {
  try {
    const food = await Food.find();
    res.status(200).json(food);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// إضافة صنف جديد
exports.createFood = async (req, res) => {
  try {
    const newFood = new Food(req.body);
    await newFood.save();
    res.status(201).json(newFood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// تحديث صنف
exports.updateFood = async (req, res) => {
  try {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedFood);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// حذف صنف
exports.deleteFood = async (req, res) => {
  try {
    await Food.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Food item deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};