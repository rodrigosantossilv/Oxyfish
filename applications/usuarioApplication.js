
class UsuarioApplication {
  constructor(usuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async adicionar(usuario) {
    usuarioRepository.adicionar(usuario);
  };

  async get(codigo) {
    return await this.usuarioRepository.get(codigo);
  };

  async getAll() {
    return await this.usuarioRepository.getAll();
  };            

}

module.exports = UsuarioApplication;
