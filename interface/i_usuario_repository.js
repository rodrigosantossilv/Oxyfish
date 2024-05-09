class IUsuarioRepository {
    constructor() {
      if (new.target === IUsuarioRepository) {
        throw new Error(
          "A interface IUsuarioRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionarUsuario(usuario) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async get(codigo) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async getAll() {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  }
  
  module.exports = IUsuarioRepository;
  