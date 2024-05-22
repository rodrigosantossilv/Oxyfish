const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoutes');
const criatorioRoutes = require('./routes/criatorioRoutes');
const criatorioUsuarioRoutes = require('./routes/criatorioUsuarioRoutes');
const leituraRoutes = require('./routes/leituraRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON
app.use(usuarioRoutes);  // Uso das rotas de usuário
app.use(criatorioRoutes);
app.use(criatorioUsuarioRoutes);
app.use(leituraRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
