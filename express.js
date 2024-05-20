const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
const port = 3000;

app.use(express.json()); // Middleware para parsear JSON
app.use(usuarioRoutes);  // Uso das rotas de usuário

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
