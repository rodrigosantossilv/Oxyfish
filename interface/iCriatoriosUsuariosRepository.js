class ICriatoriosUsuariosRepository {
  constructor() {
    if (new.target === ICriatoriosUsuariosRepository) {
      throw new Error(
        "A interface ICriatoriosUsuariosRepository não pode ser instanciada."
      );
    }
  }

  async add(idCriatorio, periodo, idUsuario, idSensor) {
    throw new Error("This method must be implemented by concrete classes.");
  }

  async getById(id) {
    throw new Error("This method must be implemented by concrete classes.");
  }

  async getAll() {
    throw new Error("This method must be implemented by concrete classes.");
  }

  async update(id, newData) {
    throw new Error("This method must be implemented by concrete classes.");
  }

  async delete(id) {
    throw new Error("This method must be implemented by concrete classes.");
  }
}

module.exports = ICriatoriosUsuariosRepository;
