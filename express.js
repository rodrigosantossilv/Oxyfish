const express = require('express');
const criatorioRoutes = require('./routes/criatorioRoutes');
const criatorioUsuarioRoutes = require('./routes/criatorioUsuarioRoutes');
const leituraRoutes = require('./routes/leituraRoutes');
const nivelOxigenioRoutes = require('./routes/nivelOxigenioRoutes'); // Importe as rotas de nível de oxigênio aqui
const peixeRoutes = require('./routes/peixeRoutes');
const phRoutes = require('./routes/phRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const temperaturaRoutes = require('./routes/temperaturaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authRoutes = require('./routes/authRoutes'); // Importe as rotas de autenticação aqui
const isAuth = require('./middleware/isAuth'); // Importe o middleware de autenticação aqui

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // Middleware para parsear JSON
app.use(authRoutes); // Use as rotas de autenticação
app.use(isAuth); // Use o middleware de autenticação
app.use(usuarioRoutes);  // Uso das rotas de usuário
app.use(criatorioRoutes);
app.use(criatorioUsuarioRoutes);
app.use(leituraRoutes);
app.use(nivelOxigenioRoutes);
app.use(peixeRoutes);
app.use(phRoutes);
app.use(sensorRoutes);
app.use(temperaturaRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
