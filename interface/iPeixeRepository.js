class IPeixeRepository {
  constructor() {
    if (new.target === IPeixeRepository) {
      throw new Error(
        "A interface IPeixeRepository não pode ser instanciada."
      );
    }
  }

  async add(especie, idade, idCriatorio) {
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

module.exports = IPeixeRepository;
