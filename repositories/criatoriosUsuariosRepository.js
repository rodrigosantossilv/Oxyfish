const ICriatoriosUsuariosRepository = require("../interface/iCriatoriosUsuariosRepository");
const { CriatorioUsuario } = require("../data/dbContext");
const criatorioUsuario = require("../data/criatorioUsuario");

class CriatoriosUsuariosRepository extends ICriatoriosUsuariosRepository {
    constructor() {
      if (new.target === CriatoriosUsuariosRepository) {
        throw new Error(
          "A interface CriatoriosUsuariosRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionar(criatorioUsuario) {
      try {
        const novocriatorioUsuario = await CriatorioUsuario.create(criatorioUsuario);
        return novocriatorioUsuario;
      } catch (error) {
        throw new Error("Erro ao adicionar criatório: " + error.message);
      }
    }
  
    async buscar(id) {
      try {
        const criatorio = await CriatorioUsuario.findByPk(id);
        return criatorioUsuario;
      } catch (error) {
        throw new Error("Erro ao buscar criatório por ID: " + error.message);
      }
    }
  }
  
  module.exports = CriatoriosUsuariosRepository;
  