class ILeituraRepository {
    constructor() {
      if (new.target === ILeituraRepository) {
        throw new Error(
          "A interface ILeituraRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionar(idSensor, idTemperatura, idPh, idNivelOxigenio) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async buscar(id) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  }
  
  module.exports = ILeituraRepository;
  