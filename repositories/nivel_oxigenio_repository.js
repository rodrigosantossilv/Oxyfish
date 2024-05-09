const { Nivel_Oxigenio } = require("../data/dbContext");

class NivelOxigenioRepository {
    async adicionarNivelOxigenio(valor) {
        try {
            const novoNivelOxigenio = await Nivel_Oxigenio.create({ valor });
            return novoNivelOxigenio;
        } catch (error) {
            throw new Error('Erro ao adicionar nível de oxigênio: ' + error.message);
        }
    }

    async buscarNivelOxigenioPorId(id) {
        try {
            const nivelOxigenio = await Nivel_Oxigenio.findByPk(id);
            return nivelOxigenio;
        } catch (error) {
            throw new Error('Erro ao buscar nível de oxigênio por ID: ' + error.message);
        }
    }
}

module.exports = NivelOxigenioRepository;
