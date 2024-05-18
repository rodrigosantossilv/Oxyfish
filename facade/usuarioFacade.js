
class UsuarioFacade{
    constructor(usuarioApplication) {
      this.usuarioApplication = usuarioApplication;
    }
  
    async adicionar(usuario) {
        this.usuarioApplication.adicionar(usuario);
    };
  
    async get(codigo) {
      return await this.usuarioApplication.get(codigo);
    };
  
    async getAll() {
      return await this.usuarioApplication.getAll();
    };            
  
  }
  
  module.exports = UsuarioFacade;
  