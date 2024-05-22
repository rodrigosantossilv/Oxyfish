const app = express();
const port = 3000;

const express = require('express');

const usuarioRoutes = require('./routes/usuarioRoutes');
const criatorioRoutes = require('./routes/criatorioRoutes');
const criatorioUsuarioRoutes = require('./routes/criatorioUsuarioRoutes');


app.use(express.json()); // Middleware para parsear JSON
app.use(usuarioRoutes);  // Uso das rotas de usuário
app.use(criatorioRoutes);
app.use(criatorioUsuarioRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
