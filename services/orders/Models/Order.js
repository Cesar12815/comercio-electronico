// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }], // Referencia a otro modelo, si aplica
  totalAmount: { type: Number, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
