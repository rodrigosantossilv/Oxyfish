const UsuarioRepository = require("./repositories/usuario_repository");

let usuario_repository = new UsuarioRepository();
usuario_repository.adicionarUsuario({
  nome: "Teste",
  email: "b5a0S@example.com",
  senha: "12123 ",
});
