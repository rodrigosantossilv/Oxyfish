const ICriatorioRepository = require("../interfaces/i_criatorio_repository");
const { Criatorio } = require("../data/dbContext");
const criatorio = require("../data/criatorio");

class Criatorio extends ICriatorioRepository {
    constructor() {
        super();
    }

    adicionarUsuario = async (Criatorio) => {
        const novoCriatorio = await Criatorio.create({
            nome:criatorio.nome,
            localizacao: criatorio.localizacao,
            capacidade_maxima: criatorio.capacidade_maxima,
            
        });
    }

    get = async (codigo) => {
        throw new Error("Esse método não pode ser chamado")
    }

    getAll = async () => {
        throw new Error("Esse método não pode ser chamado")
    };
}

module.exports = UsuarioRepository     
