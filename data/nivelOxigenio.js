const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const NivelOxigenio = Sequelize.define(
        "nivelOxigenio",
        {
            idNivelOxigenio:{
                type: DataTypes.INTEGER(11),
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
                unique: true,
            },
            valor:{
                type: DataTypes.DECIMAL(10, 2), // Decimal com 10 dígitos no total e 2 casas decimais
                allowNull: false 
            },
        },
        { freezeTableName: true, timestamps: false }
    );
    return NivelOxigenio;
}
