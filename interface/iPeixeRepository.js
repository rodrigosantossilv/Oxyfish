class IPeixeRepository {
    constructor() {
      if (new.target === IPeixeRepository) {
        throw new Error(
          "A interface IPeixeRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionar(especie, idade, idCriatorio) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async buscar(id) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  }
  
  module.exports = IPeixeRepository;
  