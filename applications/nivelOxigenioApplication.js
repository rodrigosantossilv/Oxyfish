class NivelOxigenioApplication {
    constructor(nivelOxigenioRepository) {
      this.nivelOxigenioRepository = nivelOxigenioRepository;
    }
  
    async getById(id) {
      try {
        const nivelOxigenio = await this.nivelOxigenioRepository.getById(id);
        return nivelOxigenio;
      } catch (error) {
        throw new Error('Erro ao buscar nível de oxigênio por ID: ' + error.message);
      }
    }
  
    async getAll() {
      try {
        const niveisOxigenio = await this.nivelOxigenioRepository.getAll();
        return niveisOxigenio;
      } catch (error) {
        throw new Error('Erro ao buscar todos os níveis de oxigênio: ' + error.message);
      }
    }
  
    async update(id, newData) {
      try {
        await this.nivelOxigenioRepository.update(id, newData);
      } catch (error) {
        throw new Error('Erro ao atualizar nível de oxigênio: ' + error.message);
      }
    }
  
    async delete(id) {
      try {
        await this.nivelOxigenioRepository.delete(id);
      } catch (error) {
        throw new Error('Erro ao deletar nível de oxigênio: ' + error.message);
      }
    }
  }
  
  module.exports = NivelOxigenioApplication;
  