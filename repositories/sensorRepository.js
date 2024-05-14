const { Sensor } = require("../data/dbContext");

class SensorRepository {
    async adicionar(localizacao, idCriatorio) {
        try {
            const novoSensor = await Sensor.create({
                localizacao,
                id_criatorio: idCriatorio
            });
            return novoSensor;
        } catch (error) {
            throw new Error('Erro ao adicionar sensor: ' + error.message);
        }
    }

    async buscar(id) {
        try {
            const sensor = await Sensor.findByPk(id);
            return sensor;
        } catch (error) {
            throw new Error('Erro ao buscar sensor por ID: ' + error.message);
        }
    }
}

module.exports = SensorRepository;
