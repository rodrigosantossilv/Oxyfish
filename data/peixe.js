const { Sequelize, DataTypes } = require("sequelize");

module.exports =(Sequelize,DataTypes) => {
    const Peixe = Sequelize.define(
        "Peixes",
        {
            id_peixe:{
                type:DataTypes.INTERGER(11),
                primarykey:true,
                allowNull:false,
                autoIncrement:true,
                unique:true,
            },
            especie:{
                type: DataTypes.STRING(255),
                allowNull:false,
            },
            idade:{
                type:DataTypes.INTERGER(11),
                allowNull:false,
            },
            id_criatorio: {
                type: DataTypes.INTEGER(11),
                allowNull: false, 
                references: {
                    model: 'Criatorio', // Nome da tabela referenciada
                    key: 'id' // Nome da chave primária na tabela referenciada
                }
            },
        },
        {freezeTableName: true, Timestamps: false}
    );
    return Peixe;
}