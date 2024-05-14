const { Leitura } = require("../data/dbContext");

class LeituraRepository {
    async adicionar(idSensor, idTemperatura, idPh, idNivelOxigenio) {
        try {
            const novaLeitura = await Leitura.create({
                id_sensor: idSensor,
                id_temperatura: idTemperatura,
                id_ph: idPh,
                id_nivel_oxigenio: idNivelOxigenio,
            });
            return novaLeitura;
        } catch (error) {
            throw new Error('Erro ao adicionar leitura: ' + error.message);
        }
    }

    async buscar(id) {
        try {
            const leitura = await Leitura.findByPk(id);
            return leitura;
        } catch (error) {
            throw new Error('Erro ao buscar leitura por ID: ' + error.message);
        }
    }
}

module.exports = LeituraRepository;
