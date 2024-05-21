class ICriatorioRepository {
  constructor() {
    if (new.target === ICriatorioRepository) {
      throw new Error(
        "The interface ICriatorioRepository cannot be instantiated."
      );
    }
  }

  async add(criatorio) {
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

module.exports = ICriatorioRepository;
