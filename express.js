const express = require('express');

const criatorioRoutes = require('./routes/criatorioRoutes');
const criatorioUsuarioRoutes = require('./routes/criatorioUsuarioRoutes');
const leituraRoutes = require('./routes/leituraRoutes');
const nivelOxigenioRoutes = require('./routes/nivelOxigenioRoutes');
const peixeRoutes = require('./routes/peixeRoutes');
const phRoutes = require('./routes/phRoutes');
const sensorRoutes = require('./routes/sensorRoutes');
const temperaturaRoutes = require('./routes/temperaturaRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authRoutes = require('./routes/authRoutes');
const alarmeRoutes = require('./routes/alarmeRoutes');
const isAuth = require("./middleware/isAuth"); // Importando o middleware isAuth



const app = express();  
const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/usuario", isAuth, usuarioRoutes);
app.use("/api/criatorio",criatorioRoutes);
app.use("/api/criatorioUsuario",criatorioUsuarioRoutes);
app.use("/api/leitura",leituraRoutes);
app.use("/api/nivelOxigenio",nivelOxigenioRoutes);
app.use("/api/peixe",peixeRoutes);
app.use("/api/ph",phRoutes);
app.use("/api/sensor",sensorRoutes);
app.use('/api/alarmes', alarmeRoutes);
app.use("/api/temperatura",temperaturaRoutes);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
