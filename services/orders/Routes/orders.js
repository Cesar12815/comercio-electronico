const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

// Crear un pedido
router.post('/', async (req, res) => {
  try {
    const { customerName, products, totalAmount } = req.body;
    const order = new Order({ customerName, products, totalAmount });
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Listar todos los pedidos
router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('products');
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
