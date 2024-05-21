class CriatorioApplication {
   constructor(criatorioRepository) {
     this.criatorioRepository = criatorioRepository;
   }
 
   async add(criatorio) {
     try {
       const novoCriatorio = await this.criatorioRepository.add(criatorio);
       return novoCriatorio;
     } catch (error) {
       throw new Error("Error adding criatorio: " + error.message);
     }
   }
 
   async getById(id) {
     try {
       const criatorio = await this.criatorioRepository.getById(id);
       return criatorio;
     } catch (error) {
       throw new Error("Error fetching criatorio by ID: " + error.message);
     }
   }
 
   async getAll() {
     try {
       const criatorios = await this.criatorioRepository.getAll();
       return criatorios;
     } catch (error) {
       throw new Error("Error fetching all criatorios: " + error.message);
     }
   }
 
   async update(id, newData) {
     try {
       await this.criatorioRepository.update(id, newData);
     } catch (error) {
       throw new Error("Error updating criatorio: " + error.message);
     }
   }
 
   async delete(id) {
     try {
       await this.criatorioRepository.delete(id);
     } catch (error) {
       throw new Error("Error deleting criatorio: " + error.message);
     }
   }
 }
 
 module.exports = CriatorioApplication;
 