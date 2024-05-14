class IPhRepository {
    constructor() {
      if (new.target === IPhRepository) {
        throw new Error(
          "A interface IPhRepository não pode ser instanciada."
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
  
  module.exports = IPhRepository;
  