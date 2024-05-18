const ICriatorioRepository = require("../interface/iCriatorioRepository");
const { Criatorio } = require("../data/dbContext");

class CriatorioRepository extends ICriatorioRepository {
  async adicionar(criatorio) {
    try {
      const novoCriatorio = await Criatorio.create(criatorio);
      return novoCriatorio;
    } catch (error) {
      throw new Error("Erro ao adicionar criatório: " + error.message);
    }
  }

  async buscar(id) {
    try {
      const criatorio = await Criatorio.findByPk(id);
      return criatorio;
    } catch (error) {
      throw new Error("Erro ao buscar criatório por ID: " + error.message);
    }
  }
}

module.exports = CriatorioRepository;
