const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Leitura = Sequelize.define(
        "Leitura",
        {
            idLeitura:{
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,
            },
            dataHora:{
                type: DataTypes.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'), // Define o valor padrão como a data e hora atuais
                allowNull: false,
            },
            idSensor: {
                type: DataTypes.INTEGER(11),
                allowNull: false,
                references: {
                    model: 'Sensor', // Nome da tabela referenciada
                    key: 'id' // Nome da chave primária na tabela referenciada
                }
            },
            idTemperatura:{
                type: DataTypes.INTEGER(11),
                allowNull: false,
                references:{
                    model: 'Temperatura',
                    key: 'id'
                }
            },
            idPh:{
                type: DataTypes.INTEGER(11),
                allowNull: false,
                references:{
                    model: 'Ph',
                    key: 'id'
                }
            },
            idNivelOxigenio:{
                type: DataTypes.INTEGER(11),
                allowNull: false,
                references:{
                    model: 'Nivel_Oxigenio',
                    key: 'id'
                }
            },
        },
        {freezeTableName: true, timestamps: false}
    );
    return Leitura;
}
