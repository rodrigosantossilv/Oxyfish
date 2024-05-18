module.exports = (Sequelize, DataTypes) => {
  const Usuario = Sequelize.define(
    "usuarios",
    {
      id: {
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
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING, // Alterado para STRING para armazenar senhas como strings
        allowNull: false,
      },
      // dataCadastro: {
      //   type: DataTypes.DATE,
      //   defaultValue: _Sequelize.literal("CURRENT_TIMESTAMP"), // Define o valor padrão como a data e hora atuais
      //   allowNull: false,
      // },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Usuario;
};

