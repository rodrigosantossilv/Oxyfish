const { Peixe } = require("../data/dbContext");

class PeixeRepository {
    async adicionar(especie, idade, idCriatorio) {
        try {
            const novoPeixe = await Peixe.create({
                especie,
                idade,
                id_criatorio: idCriatorio
            });
            return novoPeixe;
        } catch (error) {
            throw new Error('Erro ao adicionar peixe: ' + error.message);
        }
    }

    async buscar(id) {
        try {
            const peixe = await Peixe.findByPk(id);
            return peixe;
        } catch (error) {
            throw new Error('Erro ao buscar peixe por ID: ' + error.message);
        }
    }
}

module.exports = PeixeRepository;
