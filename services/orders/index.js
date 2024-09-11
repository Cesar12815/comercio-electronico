const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const orderRoutes = require('./routes/orders'); // Asegúrate de que esta ruta sea correcta

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/comercio')
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Usa las rutas correspondientes
app.use('/orders', orderRoutes); // Para el servicio de pedidos

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Service listening on port ${PORT}`);
});
