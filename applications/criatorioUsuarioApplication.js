class CriatorioUsuarioApplication {
   constructor(criatorioUsuarioRepository) {
     this.criatorioUsuarioRepository = criatorioUsuarioRepository;
   }
 
   async add(idCriatorio, periodo, idUsuario, idSensor) {
     try {
       const novoCriatorioUsuario = await this.criatorioUsuarioRepository.add(idCriatorio, periodo, idUsuario, idSensor);
       return novoCriatorioUsuario;
     } catch (error) {
       throw new Error("Erro ao adicionar criatório usuário: " + error.message);
     }
   }
 
   async getById(id) {
     try {
       const criatorioUsuario = await this.criatorioUsuarioRepository.getById(id);
       return criatorioUsuario;
     } catch (error) {
       throw new Error("Erro ao obter criatório usuário por ID: " + error.message);
     }
   }
 
   async getAll() {
     try {
       const criatoriosUsuarios = await this.criatorioUsuarioRepository.getAll();
       return criatoriosUsuarios;
     } catch (error) {
       throw new Error("Erro ao obter todos os criatórios usuários: " + error.message);
     }
   }
 
   async update(id, newData) {
     try {
       await this.criatorioUsuarioRepository.update(id, newData);
     } catch (error) {
       throw new Error("Erro ao atualizar criatório usuário: " + error.message);
     }
   }
 
   async delete(id) {
     try {
       await this.criatorioUsuarioRepository.delete(id);
     } catch (error) {
       throw new Error("Erro ao deletar criatório usuário: " + error.message);
     }
   }
 }
 
 module.exports = CriatorioUsuarioApplication;
 