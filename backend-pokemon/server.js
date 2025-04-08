const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const itemRoutes = require('./routes/item.routes');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Garantir pasta de uploads
const uploadPath = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Rotas
app.use('/items', itemRoutes);

// Iniciar servidor
app.listen(PORT, () => console.log(`🚀 Backend rodando em http://localhost:${PORT}`));
