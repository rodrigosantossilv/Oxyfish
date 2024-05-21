class ISensorRepository {
  constructor() {
    if (new.target === ISensorRepository) {
      throw new Error(
        "A interface ISensorRepository não pode ser instanciada."
      );
    }
  }

  async add(localizacao, idCriatorio) {
    throw new Error("Este método deve ser implementado pelas classes concretas.");
  }

  async getById(id) {
    throw new Error("Este método deve ser implementado pelas classes concretas.");
  }

  async getAll() {
    throw new Error("Este método deve ser implementado pelas classes concretas.");
  }

  async update(id, newData) {
    throw new Error("Este método deve ser implementado pelas classes concretas.");
  }

  async delete(id) {
    throw new Error("Este método deve ser implementado pelas classes concretas.");
  }
}

module.exports = ISensorRepository;
