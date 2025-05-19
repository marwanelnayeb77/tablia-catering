const express = require('express');
const router = express.Router();
const foodcontroller = require('../controllers/foodcontrollers');

router.get('/', foodController.getAllFood);
router.post('/', foodController.createFood);
router.put('/:id', foodController.updateFood);
router.delete('/:id', foodController.deleteFood);

module.exports = router;