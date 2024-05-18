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

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tabela criada com sucesso!");
  })
  .catch((error) => {
    console.log("Erros: " + error);
  });

Criatorio.hasMany(CriatorioUsuario, {
  foreignKey: "idCriatorio",
});

Usuario.hasMany(CriatorioUsuario, {
  foreignKey: "idUsuario",
});

module.exports = { Usuario, Criatorio, CriatorioUsuario };
