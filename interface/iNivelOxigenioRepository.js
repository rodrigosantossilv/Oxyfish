class INivelOxigenioRepository {
    constructor() {
      if (new.target === INivelOxigenioRepository) {
        throw new Error(
          "A interface INivelOxigenioRepository não pode ser instanciada."
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
  
  module.exports = INivelOxigenioRepository;
  