class ICriatorioRepository {
    constructor() {
      if (new.target === ICriatorioRepository) {
        throw new Error(
          "A interface ICriatoriosUsuariosRepository não pode ser instanciada."
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
  
  module.exports = ICriatorioRepository;
  