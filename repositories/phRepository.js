const IPhRepository = require("../interface/iPhRepository");
const { Ph } = require("../data/dbContext");

class PhRepository extends IPhRepository {
    constructor() {
        super();
    }

    async getById(id) {
        try {
            const ph = await Ph.findByPk(id);
            return ph;
        } catch (error) {
            throw new Error('Erro ao buscar Ph por ID: ' + error.message);
        }
    }

    async getAll() {
        try {
            const phs = await Ph.findAll();
            return phs;
        } catch (error) {
            throw new Error('Erro ao buscar todos os Phs: ' + error.message);
        }
    }

    async add(data) {
        try {
            const newPh = await Ph.create(data);
            return newPh;
        } catch (error) {
            throw new Error('Erro ao criar novo Ph: ' + error.message);
        }
    }

    async update(id, newData) {
        try {
            const ph = await Ph.findByPk(id);
            if (!ph) {
                throw new Error('Ph não encontrado');
            }
            await ph.update(newData);
        } catch (error) {
            throw new Error('Erro ao atualizar Ph: ' + error.message);
        }
    }

    async delete(id) {
        try {
            const ph = await Ph.findByPk(id);
            if (!ph) {
                throw new Error('Ph não encontrado');
            }
            await ph.destroy();
        } catch (error) {
            throw new Error('Erro ao deletar Ph: ' + error.message);
        }
    }
}

module.exports = PhRepository;
