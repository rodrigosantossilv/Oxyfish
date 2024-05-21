const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Peixe = sequelize.define(
        "peixe",
        {
            idPeixe: {
                type: DataTypes.INTEGER,
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
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            idCriatorio: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        { freezeTableName: true, timestamps: false }
    );
    return Peixe;
}
