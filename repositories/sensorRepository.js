const ISensorRepository = require("../interface/iSensorRepository");
const { Sensor } = require("../data/dbContext");

class SensorRepository extends ISensorRepository {
    constructor() {
        super();
    }

    async getById(id) {
        try {
            const sensor = await Sensor.findByPk(id);
            return sensor;
        } catch (error) {
            throw new Error('Erro ao buscar sensor por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const sensores = await Sensor.findAll();
            return sensores;
        } catch (error) {
            throw new Error('Erro ao buscar todos os sensores: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const sensor = await Sensor.findByPk(id);
            if (!sensor) {
                throw new Error('Sensor não encontrado');
            }
            await sensor.update(newData);
        } catch (error) {
            throw new Error('Erro ao atualizar sensor: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const sensor = await Sensor.findByPk(id);
            if (!sensor) {
                throw new Error('Sensor não encontrado');
            }
            await sensor.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar sensor: ' + error.message);
        }
    }
}

module.exports = SensorRepository;
