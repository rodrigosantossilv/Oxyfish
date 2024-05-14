class CriatoriosUsuariosRepository {
    constructor() {
      if (new.target === CriatoriosUsuariosRepository) {
        throw new Error(
          "A interface CriatoriosUsuariosRepository não pode ser instanciada."
        );
      }
    }
  
    async adicionar(idCriatorio, periodo, idUsuario, idSensor) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  
    async buscar(id) {
      throw new Error("Este método deve ser implementado pelas classes concretas.");
    }
  }
  
  module.exports = CriatoriosUsuariosRepository;
  