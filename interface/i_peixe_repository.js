class IPeixeRepository {
    constructor() {
      if (new.target === IPeixeRepository) {
        throw new Error(
          "A interface IPeixeRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionarPeixe(especie, idade, idCriatorio) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async buscarPeixePorId(id) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  }
  
  module.exports = IPeixeRepository;
  