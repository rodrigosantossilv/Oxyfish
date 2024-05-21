const { Leitura } = require("../data/dbContext");

class LeituraRepository {
    async add(idSensor, idTemperatura, idPh, idNivelOxigenio) {
        try {
            const novaLeitura = await Leitura.create({
                idSensor: idSensor,
                idTemperatura: idTemperatura,
                idPh: idPh,
                idNivelOxigenio: idNivelOxigenio,
            });
            return novaLeitura;
        } catch (error) {
            throw new Error('Erro ao adicionar leitura: ' + error.message);
        }
    }

    async getById(id) {
        try {
            const leitura = await Leitura.findByPk(id);
            return leitura;
        } catch (error) {
            throw new Error('Erro ao buscar leitura por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const leituras = await Leitura.findAll();
            return leituras;
        } catch (error) {
            throw new Error('Erro ao buscar todas as leituras: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const leitura = await Leitura.findByPk(id);
            if (!leitura) {
                throw new Error('Leitura não encontrada');
            }
            await leitura.update(newData);
        } catch (error) {
            throw new Error('Erro ao atualizar leitura: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const leitura = await Leitura.findByPk(id);
            if (!leitura) {
                throw new Error('Leitura não encontrada');
            }
            await leitura.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar leitura: ' + error.message);
        }
    }
}

module.exports = LeituraRepository;
