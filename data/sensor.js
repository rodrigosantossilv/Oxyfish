const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    const Sensor = sequelize.define(
        "Sensor",
        {
            id_sensor: {
                type: DataTypes.INTEGER(11),
                primaryKey: true,
                allowNull: false,
                autoIncrement: true,
                unique: true,
            },
            localizacao: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            id_criatorio: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'Criatorio', // Nome da tabela referenciada
                    key: 'id' // Nome da chave primária na tabela referenciada
                },
                foreignKey: true // Define este campo como uma chave estrangeira
            },
        },
        { freezeTableName: true, timestamps: false }
    );
    return Sensor;
}
