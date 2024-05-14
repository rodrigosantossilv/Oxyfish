const { Temperatura } = require("../data/dbContext");

class TemperaturaRepository {
    async adicionarTemperatura(valor) {
        try {
            const novaTemperatura = await Temperatura.create({ valor });
            return novaTemperatura;
        } catch (error) {
            throw new Error('Erro ao adicionar temperatura: ' + error.message);
        }
    }

    async buscarTemperaturaPorId(id) {
        try {
            const temperatura = await Temperatura.findByPk(id);
            return temperatura;
        } catch (error) {
            throw new Error('Erro ao buscar temperatura por ID: ' + error.message);
        }
    }
}

module.exports = TemperaturaRepository;
