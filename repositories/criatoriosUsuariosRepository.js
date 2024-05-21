const ICriatoriosUsuariosRepository = require("../interface/iCriatoriosUsuariosRepository");
const { CriatorioUsuario } = require("../data/dbContext");

class CriatoriosUsuariosRepository extends ICriatoriosUsuariosRepository {
    constructor() {
      super();
      if (new.target === CriatoriosUsuariosRepository) {
        throw new Error(
          "A classe CriatoriosUsuariosRepository não pode ser instanciada diretamente."
        );
      }
    }
  
    async add(idCriatorio, periodo, idUsuario, idSensor) {
      try {
        const novoCriatorioUsuario = await CriatorioUsuario.create({ idCriatorio, periodo, idUsuario, idSensor });
        return novoCriatorioUsuario;
      } catch (error) {
        throw new Error("Erro ao adicionar criatório: " + error.message);
      }
    }
  
    async getById(id) {
      try {
        const criatorioUsuario = await CriatorioUsuario.findByPk(id);
        return criatorioUsuario;
      } catch (error) {
        throw new Error("Erro ao buscar criatório por ID: " + error.message);
      }
    }

    async getAll() {
      try {
        const criatoriosUsuarios = await CriatorioUsuario.findAll();
        return criatoriosUsuarios;
      } catch (error) {
        throw new Error("Erro ao buscar todos os criatórios: " + error.message);
      }
    }

    async update(id, newData) {
      try {
        const criatorioUsuario = await CriatorioUsuario.findByPk(id);
        if (!criatorioUsuario) {
          throw new Error("Criatório não encontrado");
        }
        await criatorioUsuario.update(newData);
      } catch (error) {
        throw new Error("Erro ao atualizar criatório: " + error.message);
      }
    }

    async delete(id) {
      try {
        const criatorioUsuario = await CriatorioUsuario.findByPk(id);
        if (!criatorioUsuario) {
          throw new Error("Criatório não encontrado");
        }
        await criatorioUsuario.destroy();
      } catch (error) {
        throw new Error("Erro ao deletar criatório: " + error.message);
      }
    }
  }
  
  module.exports = CriatoriosUsuariosRepository;
