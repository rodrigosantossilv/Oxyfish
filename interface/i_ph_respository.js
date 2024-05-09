class IPhRepository {
    constructor() {
      if (new.target === IPhRepository) {
        throw new Error(
          "A interface IPhRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionarPh(valor) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async buscarPhPorId(id) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  }
  
  module.exports = IPhRepository;
  