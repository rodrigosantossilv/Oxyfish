class SensorFacade {
  constructor(sensorApplication) {
      this.sensorApplication = sensorApplication;
  }

  async getById(id) {
      try {
          const sensor = await this.sensorApplication.getById(id);
          return sensor;
      } catch (error) {
          throw new Error("Erro ao obter sensor por ID: " + error.message);
      }
  }

  async getAll() {
      try {
          const sensores = await this.sensorApplication.getAll();
          return sensores;
      } catch (error) {
          throw new Error("Erro ao obter todos os sensores: " + error.message);
      }
  }

  async add(data) {
      try {
          const newSensor = await this.sensorApplication.add(data);
          return newSensor;
      } catch (error) {
          throw new Error("Erro ao adicionar novo sensor: " + error.message);
      }
  }

  async update(id, newData) {
      try {
          await this.sensorApplication.update(id, newData);
      } catch (error) {
          throw new Error("Erro ao atualizar sensor: " + error.message);
      }
  }

  async delete(id) {
      try {
          await this.sensorApplication.delete(id);
      } catch (error) {
          throw new Error("Erro ao deletar sensor: " + error.message);
      }
  }
}

module.exports = SensorFacade;
