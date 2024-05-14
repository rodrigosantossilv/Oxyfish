class ISensorRepository {
    constructor() {
      if (new.target === ISensorRepository) {
        throw new Error(
          "A interface ISensorRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionar(localizacao, idCriatorio) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async buscar(id) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  }
  
  module.exports = ISensorRepository;
  