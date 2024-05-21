const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((error) => {
    console.log("Erro ao tentar conectar: " + error);
  });

const Usuario = require("./usuario")(sequelize, DataTypes);
const Criatorio = require("./criatorio")(sequelize, DataTypes);
const CriatorioUsuario = require("./criatorioUsuario")(sequelize, DataTypes);
const Leitura = require("./leitura")(sequelize, DataTypes);
const NivelOxigenio = require("./nivelOxigenio")(sequelize, DataTypes);
const Peixe = require("./peixe")(sequelize, DataTypes);
const Sensor = require("./sensor")(sequelize, DataTypes);
const Temperatura = require("./temperatura")(sequelize, DataTypes);
const Ph = require("./ph")(sequelize, DataTypes);

// Configurando associações

// Criatorio <-> CriatorioUsuario
Criatorio.hasMany(CriatorioUsuario, {
  foreignKey: "idCriatorio",
});
CriatorioUsuario.belongsTo(Criatorio, {
  foreignKey: "idCriatorio",
});

// Usuario <-> CriatorioUsuario
Usuario.hasMany(CriatorioUsuario, {
  foreignKey: "idUsuario",
});
CriatorioUsuario.belongsTo(Usuario, {
  foreignKey: "idUsuario",
});

// Criatorio <-> Peixe
Criatorio.hasMany(Peixe, {
  foreignKey: "idCriatorio",
});
Peixe.belongsTo(Criatorio, {
  foreignKey: "idCriatorio",
});

// Criatorio <-> Sensor
Criatorio.hasMany(Sensor, {
  foreignKey: "idCriatorio",
});
Sensor.belongsTo(Criatorio, {
  foreignKey: "idCriatorio",
});

// Sensor <-> Leitura
Sensor.hasMany(Leitura, {
  foreignKey: "idSensor",
});
Leitura.belongsTo(Sensor, {
  foreignKey: "idSensor",
});

// Temperatura <-> Leitura
Temperatura.hasMany(Leitura, {
  foreignKey: "idTemperatura",
});
Leitura.belongsTo(Temperatura, {
  foreignKey: "idTemperatura",
});

// NivelOxigenio <-> Leitura
NivelOxigenio.hasMany(Leitura, {
  foreignKey: "idNivelOxigenio",
});
Leitura.belongsTo(NivelOxigenio, {
  foreignKey: "idNivelOxigenio",
});

// Ph <-> Leitura
Ph.hasMany(Leitura, {
  foreignKey: "idPh",
});
Leitura.belongsTo(Ph, {
  foreignKey: "idPh",
});

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tabela criada com sucesso!");
  })
  .catch((error) => {
    console.log("Erros: " + error);
  });

module.exports = {
  Usuario,
  Criatorio,
  CriatorioUsuario,
  Leitura,
  NivelOxigenio,
  Peixe,
  Sensor,
  Temperatura,
  Ph,
};
