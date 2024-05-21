const { Sequelize, DataTypes } = require("sequelize");

module.exports = (Sequelize, DataTypes) => {
    const Leitura = Sequelize.define(
        "leitura",
        {
            idLeitura:{
                type: DataTypes.INTEGER,
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
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            idTemperatura:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            idPh:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            idNivelOxigenio:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {freezeTableName: true, timestamps: false}
    );
    return Leitura;
}
