const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/products'); // Correcto para el servicio de productos

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/comercio')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Usa las rutas correspondientes
app.use('/products', productRoutes); // Correcto para el servicio de productos

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Product service listening on port ${PORT}`);
});
