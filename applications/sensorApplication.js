class SensorApplication {
    constructor(sensorRepository) {
      this.sensorRepository = sensorRepository;
    }
  
    async getById(id) {
      try {
        const sensor = await this.sensorRepository.getById(id);
        return sensor;
      } catch (error) {
        throw new Error("Erro ao obter sensor por ID: " + error.message);
      }
    }
  
    async getAll() {
      try {
        const sensores = await this.sensorRepository.getAll();
        return sensores;
      } catch (error) {
        throw new Error("Erro ao obter todos os sensores: " + error.message);
      }
    }
  
    async update(id, newData) {
      try {
        await this.sensorRepository.update(id, newData);
      } catch (error) {
        throw new Error("Erro ao atualizar sensor: " + error.message);
      }
    }
  
    async delete(id) {
      try {
        await this.sensorRepository.delete(id);
      } catch (error) {
        throw new Error("Erro ao deletar sensor: " + error.message);
      }
    }
  }
  
  module.exports = SensorApplication;
  