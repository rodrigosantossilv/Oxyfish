class ITemperaturaRepository {
  constructor() {
    if (new.target === ITemperaturaRepository) {
      throw new Error(
        "A interface ITemperaturaRepository não pode ser instanciada."
      );
    }
  }

  async add(valor) {
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

module.exports = ITemperaturaRepository;
