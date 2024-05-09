const { Criatorio } = require("../data/dbContext");

class CriatorioRepository {
    async adicionarCriatorio(criatorio) {
        try {
            const novoCriatorio = await Criatorio.create({
                nome: criatorio.nome,
                localizacao: criatorio.localizacao,
                capacidade_maxima: criatorio.capacidade_maxima,
            });
            return novoCriatorio;
        } catch (error) {
            throw new Error('Erro ao adicionar criatório: ' + error.message);
        }
    }

    async buscarCriatorioPorId(id) {
        try {
            const criatorio = await Criatorio.findByPk(id);
            return criatorio;
        } catch (error) {
            throw new Error('Erro ao buscar criatório por ID: ' + error.message);
        }
    }
}

module.exports = CriatorioRepository;
