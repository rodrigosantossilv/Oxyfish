const ITemperaturaRepository = require("../interface/iTemperaturaRepository");
const { Temperatura } = require("../data/dbContext");

class TemperaturaRepository extends ITemperaturaRepository {
    constructor() {
        super();
    }

    async getById(id) {
        try {
            const temperatura = await Temperatura.findByPk(id);
            return temperatura;
        } catch (error) {
            throw new Error('Erro ao buscar temperatura por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const temperaturas = await Temperatura.findAll();
            return temperaturas;
        } catch (error) {
            throw new Error('Erro ao buscar todas as temperaturas: ' + error.message);
        }
    }

    async add(data) {
        try {
            const newTemperatura = await Temperatura.create(data);
            return newTemperatura;
        } catch (error) {
            throw new Error('Erro ao criar nova temperatura: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const temperatura = await Temperatura.findByPk(id);
            if (!temperatura) {
                throw new Error('Temperatura não encontrada');
            }
            await temperatura.update(newData);
        } catch (error) {
            throw new Error('Erro ao atualizar temperatura: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const temperatura = await Temperatura.findByPk(id);
            if (!temperatura) {
                throw new Error('Temperatura não encontrada');
            }
            await temperatura.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar temperatura: ' + error.message);
        }
    }
}

module.exports = TemperaturaRepository;
