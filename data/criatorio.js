const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Criatorio = sequelize.define(
    "criatorios",
    {
      idCriatorio: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      nome: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      localizacao: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      capacidadeMaxima: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Criatorio;
};
