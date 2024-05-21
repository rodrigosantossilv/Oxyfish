const ICriatorioRepository = require("../interface/iCriatorioRepository");
const { Criatorio } = require("../data/dbContext");

class CriatorioRepository extends ICriatorioRepository {
  constructor() {
    super();
  }

  async add(criatorio) {
    try {
      const novoCriatorio = await Criatorio.create(criatorio);
      return novoCriatorio;
    } catch (error) {
      throw new Error("Error adding criatorio: " + error.message);
    }
  }

  async getById(id) {
    try {
      const criatorio = await Criatorio.findByPk(id);
      return criatorio;
    } catch (error) {
      throw new Error("Error fetching criatorio by ID: " + error.message);
    }
  }

  async getAll() {
    try {
      const criatorios = await Criatorio.findAll();
      return criatorios;
    } catch (error) {
      throw new Error("Error fetching all criatorios: " + error.message);
    }
  }

  async update(id, newData) {
    try {
      const criatorio = await Criatorio.findByPk(id);
      if (!criatorio) {
        throw new Error("Criatorio not found");
      }
      await criatorio.update(newData);
      return criatorio;
    } catch (error) {
      throw new Error("Error updating criatorio: " + error.message);
    }
  }

  async delete(id) {
    try {
      const criatorio = await Criatorio.findByPk(id);
      if (!criatorio) {
        throw new Error("Criatorio not found");
      }
      await criatorio.destroy();
      return criatorio;
    } catch (error) {
      throw new Error("Error deleting criatorio: " + error.message);
    }
  }
}

module.exports = CriatorioRepository;
