const IUsuarioRepository = require("../interface/iUsuarioRepository");
const { Usuario } = require("../data/dbContext");

class UsuarioRepository extends IUsuarioRepository {
  constructor() {
    super();
  }

  async add(user) {
    try {
      const novoUsuario = await Usuario.create(user);
      return novoUsuario;
    } catch (error) {
      throw new Error("Erro ao adicionar usuário: " + error.message);
    }
  }

  async getById(id) {
    try {
      const usuario = await Usuario.findByPk(id, { raw: true });
      return usuario;
    } catch (error) {
      throw new Error("Erro ao obter usuário por ID: " + error.message);
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

  async update(id, newData) {
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }
      await usuario.update(newData);
    } catch (error) {
      throw new Error("Erro ao atualizar usuário: " + error.message);
    }
  }

  async delete(id) {
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        throw new Error('Usuário não encontrado');
      }
      await usuario.destroy();
    } catch (error) {
      throw new Error("Erro ao deletar usuário: " + error.message);
    }
  }
}

module.exports = UsuarioRepository;
