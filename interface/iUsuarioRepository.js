class IUsuarioRepository {
  constructor() {
    if (new.target === IUsuarioRepository) {
      throw new Error(
        "A interface IUsuarioRepository não pode ser instanciada."
      );
    }
  }

  async add(user) {
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

module.exports = IUsuarioRepository;
