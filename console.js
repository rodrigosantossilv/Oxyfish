const UsuarioRepository = require("./repositories/usuarioRepository");
const CriatorioRepository = require("./repositories/criatorioRepository");

let usuarioRepository = new UsuarioRepository();
let criatorioRepository = new CriatorioRepository();

usuarioRepository.adicionar({
   nome: "Teste",
   email: "b5a0S@example.com",
   senha: "12123 ",
});

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
