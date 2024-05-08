const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const Sensor = sequelize.define(
        "Sensor",
        {
            id_sensor:{
                type:DataTypes.INTERGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique:true,
            },
            localizacao:{
                type: DataTypes.STRING(255),
                allowNull:false,
            },
            id_criatorio:{
                type: DataTypes.INTEGER,
                allowNull: false, // Define se o campo pode ser nulo ou não
                references: {
                 model: 'Criatorio', // Nome da tabela referenciada
                 key: 'id' // Nome da chave primária na tabela referenciada
            }
        },
    },
    {freezeTableName: true, Timestamps: false}
    );
    return Sensor;
}