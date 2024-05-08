const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes) => {
    const Ph =Sequelize.define(
        "Ph",
        {
            id_ph:{
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
    return Ph;
}