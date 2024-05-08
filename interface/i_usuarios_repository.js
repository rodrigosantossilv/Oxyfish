class IUsuarioRepository {
  constructor() {
    if (new.target === IUsuarioRepository) {
      throw new Error(
        "A interface IUsuarioRepository não pode ser instanciada."
      );
    }
  }

  adicionarUsuario = async (usuario) => {
    throw new Error("Esse método não pode ser chamado");
  };

  get = async (codigo) => {
    throw new Error("Esse método não pode ser chamado");
  };

  getAll = async () => {
    throw new Error("Esse método não pode ser chamado");
  };
}

module.exports = IUsuarioRepository;
