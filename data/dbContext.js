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
  .catch((erro) => {
    console.log("Erro ao tentar conecta: " + erro);
  });

const Usuario = require("./usuario")(sequelize, DataTypes);
const Criatorio = require("./criatorio")(sequelize, DataTypes);
const CriatorioUsuario = require("./criatorio_usuario")(sequelize, DataTypes);

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tabela criada com sucesso!");
  })
  .catch((err) => {
    console.log("Erros: " + err);
  });

Criatorio.hasMany(CriatorioUsuario, {
  foreingKey: "id_criatorio",
});

Usuario.hasMany(CriatorioUsuario, {
  foreingKey: "id_usuario",
});

module.exports = { Usuario, Criatorio, CriatorioUsuario };
