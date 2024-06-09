const INivelOxigenioRepository = require("../interface/iNivelOxigenioRepository");
const { NivelOxigenio } = require("../data/dbContext");

class NivelOxigenioRepository extends INivelOxigenioRepository {
    constructor() {
        super();
    }

    async getById(id) {
        try {
            const nivelOxigenio = await NivelOxigenio.findByPk(id);
            return nivelOxigenio;
        } catch (error) {
            throw new Error('Erro ao buscar nível de oxigênio por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const niveisOxigenio = await NivelOxigenio.findAll();
            return niveisOxigenio;
        } catch (error) {
            throw new Error('Erro ao buscar todos os níveis de oxigênio: ' + error.message);
        }
    }

    async add(data) {
        try {
            const newNivelOxigenio = await NivelOxigenio.create(data);
            return newNivelOxigenio;
        } catch (error) {
            throw new Error('Erro ao criar novo nível de oxigênio: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const nivelOxigenio = await NivelOxigenio.findByPk(id);
            if (!nivelOxigenio) {
                throw new Error('Nível de oxigênio não encontrado');
            }
            await nivelOxigenio.update(newData);
        } catch (error) {
            throw new Error('Erro ao atualizar nível de oxigênio: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const nivelOxigenio = await NivelOxigenio.findByPk(id);
            if (!nivelOxigenio) {
                throw new Error('Nível de oxigênio não encontrado');
            }
            await nivelOxigenio.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar nível de oxigênio: ' + error.message);
        }
    }
}

module.exports = NivelOxigenioRepository;
