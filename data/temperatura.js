const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes) => {
    const Temperatura = Sequelize.define(
        "Temperatura",
        {
            id_temperatura:{
                type:DataTypes.INTEGER(11),
                primaryKey:true,
                allowNull:false,
                autoIncrement:true,
                unique:true,
            },
            valor:{
                type: DataTypes.DECIMAL(10, 2), // Decimal com 10 dígitos no total e 2 casas decimais
                allowNull: false 
            },
           
        },
        {freezeTablenName: true, Timestamps: false}
    );
    return Temperatura;
}
