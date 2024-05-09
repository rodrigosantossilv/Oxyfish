class INivelOxigenioRepository {
    constructor() {
      if (new.target === INivelOxigenioRepository) {
        throw new Error(
          "A interface INivelOxigenioRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionarNivelOxigenio(valor) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async buscarNivelOxigenioPorId(id) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  }
  
  module.exports = INivelOxigenioRepository;
  