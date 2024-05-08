class ICriatorioRepository {
    constructor() {
        if (new.target === ICriatorioRepository) {
            throw new Error("A interface ICriatorioRepository não pode ser instanciada.");
        }
    }

    adicionarProduto = async (Criatorio) => {
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