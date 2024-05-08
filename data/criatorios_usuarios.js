const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Criatorio_usuarios = sequelize.define(
    "Criatorios_Usuarios",
    {
      id_criatorio_usuarios: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      id_criatorio: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true, 
      },
      periodo: {
        type: DataTypes.STRING,
        allowNull: false,
        //defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),// Não entendi esse periodo como vai funcionar
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        foreignKey: true, // Define este campo como uma chave estrangeira
      },
      id_sensor: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "Sensor", // Nome da tabela referenciada
          key: "id", // Nome da chave primária na tabela referenciada
        },
      },
    },
    { freezeTableName: true, Timestamps: false }
  );
  return Criatorio_usuarios;
};
