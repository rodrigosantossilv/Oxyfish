class ISensorRepository {
    constructor() {
      if (new.target === ISensorRepository) {
        throw new Error(
          "A interface ISensorRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionarSensor(localizacao, idCriatorio) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async buscarSensorPorId(id) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  }
  
  module.exports = ISensorRepository;
  