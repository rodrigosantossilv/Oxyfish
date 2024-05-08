const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Criatorio = sequelize.define(
    "Criatorio",
    {
      id_criatorio: {
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
      capacidade_maxima: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    { freezeTableName: true, Timestamps: false }
  );
  return Criatorio;
};
