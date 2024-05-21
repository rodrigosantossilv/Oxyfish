class INivelOxigenioRepository {
  constructor() {
    if (new.target === INivelOxigenioRepository) {
      throw new Error(
        "A interface INivelOxigenioRepository não pode ser instanciada."
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

module.exports = INivelOxigenioRepository;
