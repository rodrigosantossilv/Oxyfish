const IUsuarioRepository = require("../interface/i_usuarios_repository");
const { Usuario } = require("../data/dbContext");

class UsuarioRepository extends IUsuarioRepository {
  constructor() {
    super();
  }

  adicionarUsuario = async (usuario) => {
    const novoUsuario = await Usuario.create(usuario);
  };

  get = async (codigo) => {
    let usuario = await Usuario.findOne({
      raw: true,
      where: { codigo: codigo },
    });
    return usuario;
  };

  getAll = async () => {
    let usuarios = Usuario.findAll({
      raw: true,
    });

    return usuarios;
  };
}

module.exports = UsuarioRepository;
