const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes) => {
    const Nivel_Oxigenio = Sequelize.define(
        "Nivel_Oxigenio",
        {
            id_nivel_oxigenio:{
                type:DataTypes.INTEGER(11),
                allowNull:false,
                primaryKey: true,
                autoIncrement:true,
                unique:true,
            },
            valor:{
                type: DataTypes.DECIMAL(10, 2), // Decimal com 10 dígitos no total e 2 casas decimais
                allowNull: false 
            },
        },
        {freezeTablenName: true, Timestamps: false}
    ); return Nivel_Oxigenio;
}