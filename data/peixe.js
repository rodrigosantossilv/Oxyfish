const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Peixe = Sequelize.define(
        "peixes",
        {
            idPeixe: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,
            },
            especie: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            idade: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
            },
            idCriatorio: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                references: {
                    model: 'Criatorio', // Nome da tabela referenciada
                    key: 'id' // Nome da chave primária na tabela referenciada
                }
            },
        },
        { freezeTableName: true, timestamps: false }
    );
    return Peixe;
}
