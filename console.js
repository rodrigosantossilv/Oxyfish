const UsuarioRepository = require("./repositories/usuario_repository");
const CriatorioRepository = require("./repositories/criatorio_repository");

let usuario_repository = new UsuarioRepository();
let criatorioRepository = new CriatorioRepository();

// usuario_repository.adicionarUsuario({
//   nome: "Teste",
//   email: "b5a0S@example.com",
//   senha: "12123 ",
// });

// criatorioRepository.adicionar({
//   nome: "Teste",
//   localizacao: "subae",
//   capacidade_maxima: 10,
// });

// let criatorio_usuario_repository = new UsuarioRepository();
// usuario_repository.adicionar({
//   nome: "Teste",
//   email: "b5a0S@example.com",
//   senha: "12123 ",
// });
