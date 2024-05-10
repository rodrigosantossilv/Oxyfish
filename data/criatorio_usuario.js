module.exports = (sequelize, DataTypes) => {
  const CriatorioUsuario = sequelize.define(
    "CriatorioUsuario",
    {
      id_criatorio_usuario: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      id_criatorio: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      periodo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    { freezeTableName: true, Timestamps: false }
  );
  return CriatorioUsuario;
};
