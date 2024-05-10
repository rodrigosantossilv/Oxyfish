class ITemperaturaRepository {
    constructor() {
      if (new.target === ITemperaturaRepository) {
        throw new Error(
          "A interface ITemperaturaRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionar(valor) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async buscar(id) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  }
  
  module.exports = ITemperaturaRepository;
  