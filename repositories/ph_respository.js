const { Ph } = require("../data/dbContext");

class PhRepository {
    async adicionarPh(valor) {
        try {
            const novoPh = await Ph.create({ valor });
            return novoPh;
        } catch (error) {
            throw new Error('Erro ao adicionar Ph: ' + error.message);
        }
    }

    async buscarPhPorId(id) {
        try {
            const ph = await Ph.findByPk(id);
            return ph;
        } catch (error) {
            throw new Error('Erro ao buscar Ph por ID: ' + error.message);
        }
    }
}

module.exports = PhRepository;
