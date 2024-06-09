class PhFacade {
  constructor(phApplication) {
      this.phApplication = phApplication;
  }

  async getById(id) {
      try {
          const ph = await this.phApplication.getById(id);
          return ph;
      } catch (error) {
          throw new Error("Erro ao obter Ph por ID: " + error.message);
      }
  }

  async getAll() {
      try {
          const phs = await this.phApplication.getAll();
          return phs;
      } catch (error) {
          throw new Error("Erro ao obter todos os Phs: " + error.message);
      }
  }

  async add(data) {
      try {
          const newPh = await this.phApplication.add(data);
          return newPh;
      } catch (error) {
          throw new Error("Erro ao adicionar novo Ph: " + error.message);
      }
  }

  async update(id, newData) {
      try {
          await this.phApplication.update(id, newData);
      } catch (error) {
          throw new Error("Erro ao atualizar Ph: " + error.message);
      }
  }

  async delete(id) {
      try {
          await this.phApplication.delete(id);
      } catch (error) {
          throw new Error("Erro ao deletar Ph: " + error.message);
      }
  }
}

module.exports = PhFacade;
