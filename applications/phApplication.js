class PhApplication {
    constructor(phRepository) {
      this.phRepository = phRepository;
    }
  
    async getById(id) {
      try {
        const ph = await this.phRepository.getById(id);
        return ph;
      } catch (error) {
        throw new Error("Erro ao obter Ph por ID: " + error.message);
      }
    }
  
    async getAll() {
      try {
        const phs = await this.phRepository.getAll();
        return phs;
      } catch (error) {
        throw new Error("Erro ao obter todos os Phs: " + error.message);
      }
    }
  
    async update(id, newData) {
      try {
        await this.phRepository.update(id, newData);
      } catch (error) {
        throw new Error("Erro ao atualizar Ph: " + error.message);
      }
    }
  
    async delete(id) {
      try {
        await this.phRepository.delete(id);
      } catch (error) {
        throw new Error("Erro ao deletar Ph: " + error.message);
      }
    }
  }
  
  module.exports = PhApplication;
  