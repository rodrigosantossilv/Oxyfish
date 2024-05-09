const IUsuarioRepository = require("../interface/i_usuarios_repository");
const { Usuario } = require("../data/dbContext");

class UsuarioRepository extends IUsuarioRepository {
  constructor() {
    super();
  }

  async adicionarUsuario(usuario) {
    try {
      const novoUsuario = await Usuario.create(usuario);
      return novoUsuario;
    } catch (error) {
      throw new Error("Erro ao adicionar usuário: " + error.message);
    }
  }

  async get(codigo) {
    try {
      const usuario = await Usuario.findOne({
        raw: true,
        where: { codigo: codigo },
      });
      return usuario;
    } catch (error) {
      throw new Error("Erro ao obter usuário: " + error.message);
    }
  }

  async getAll() {
    try {
      const usuarios = await Usuario.findAll({ raw: true });
      return usuarios;
    } catch (error) {
      throw new Error("Erro ao obter todos os usuários: " + error.message);
    }
  }
}

module.exports = UsuarioRepository;
