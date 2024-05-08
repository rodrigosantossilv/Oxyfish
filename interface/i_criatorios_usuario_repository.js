class ICriatorio_usuarioRepository {
    constructor() {
        if (new.target === ICriatorio_usuarioRepository) {
            throw new Error("A interface ICriatorio_usuarioRepository não pode ser instanciada.");
        }
    }

    adicionarProduto = async (Criatorio_usuario) => {
        throw new Error("Esse método não pode ser chamado")
    }

    get = async (codigo) => {
        throw new Error("Esse método não pode ser chamado")
    }

    getAll = async () => {
        throw new Error("Esse método não pode ser chamado")
    };
}

module.exports = IProdutoRepository     