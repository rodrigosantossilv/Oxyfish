module.exports = (sequelize, DataTypes) => {
  const CriatorioUsuario = sequelize.define(
    "CriatorioUsuario",
    {
      idCriatorioUsuario: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      idCriatorio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      periodo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return CriatorioUsuario;
};
