const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize,DataTypes) => {
    const Leitura = Sequelize.define(
        "Leitura",
        {
            id_leitura:{
                type:DataTypes.INTEGER(11),
                primaryKey:true,
                allowNull:false,
                autoIncrement:true,
                unique:true,
            },
            data_hora:{
                type: DataTypes.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Define o valor padrão como a data e hora atuais
                allowNull:false,
            },
            id_sensor: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                references: {
                 model: 'Sensor', // Nome da tabela referenciada
                 key: 'id' // Nome da chave primária na tabela referenciada
              }
            },
            id_temperatura:{
                type: DataTypes.INTEGER(11),
                allowNull:false,
                references:{
                    model:'Temperatura',
                    key:'id'
                }
            },
            id_ph:{
                type: DataTypes.INTEGER(11),
                allowNull:false,
                references:{
                    model:'Ph',
                    key:'id'
                }
            },
            id_nivel_oxigenio:{
                type: DataTypes.INTEGER(11),
                allowNull:false,
                references:{
                    model:'Nivel_Oxigenio',
                    key:'id'
                }
            },
        },
        {freezeTableName: true, Timestamps: false}
    );
    return Criatorio_usuarios;
}