// repositories/alarmeRepository.js
const AlarmeFactory = require('../factories/alarmeFactory');
const { Ph, NivelOxigenio, Temperatura } = require('../data/dbContext'); // Ajuste o caminho conforme necessário

class AlarmeRepository {
    async getUltimosSensores() {
        try {
            const ph = await Ph.findOne({ order: [['idPh', 'DESC']] });
            const oxigenio = await NivelOxigenio.findOne({ order: [['idOxigenio', 'DESC']] });
            const temperatura = await Temperatura.findOne({ order: [['idTemperatura', 'DESC']] });

            const phValor = ph ? ph.valor : null;
            const oxigenioValor = oxigenio ? oxigenio.valor : null;
            const temperaturaValor = temperatura ? temperatura.valor : null;

            return AlarmeFactory.createAlarme(phValor, oxigenioValor, temperaturaValor);
        } catch (error) {
            throw new Error('Erro ao buscar valores dos sensores do banco de dados: ' + error.message);
        }
    }
}

module.exports = new AlarmeRepository();
