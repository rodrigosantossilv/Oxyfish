class NivelOxigenioFacade {
    constructor(nivelOxigenioApplication) {
      this.nivelOxigenioApplication = nivelOxigenioApplication;
    }
  
    async getById(id) {
      try {
        const nivelOxigenio = await this.nivelOxigenioApplication.getById(id);
        return nivelOxigenio;
      } catch (error) {
        throw new Error('Erro ao buscar nível de oxigênio por ID: ' + error.message);
      }
    }
  
    async getAll() {
      try {
        const niveisOxigenio = await this.nivelOxigenioApplication.getAll();
        return niveisOxigenio;
      } catch (error) {
        throw new Error('Erro ao buscar todos os níveis de oxigênio: ' + error.message);
      }
    }
  
    async update(id, newData) {
      try {
        await this.nivelOxigenioApplication.update(id, newData);
      } catch (error) {
        throw new Error('Erro ao atualizar nível de oxigênio: ' + error.message);
      }
    }
  
    async delete(id) {
      try {
        await this.nivelOxigenioApplication.delete(id);
      } catch (error) {
        throw new Error('Erro ao deletar nível de oxigênio: ' + error.message);
      }
    }
  }
  
  module.exports = NivelOxigenioFacade;
  