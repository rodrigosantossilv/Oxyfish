class Alerta {
   constructor(sensores) {
     this.sensores = sensores;
     this.alerta = "";
   }
 
   verificarOxigenio() {
     if (this.sensores.oxigenio < 20) {
       this.alerta = "os peixes estão morrendo devido à falta de oxigênio";
     } else {
       this.alerta = "Nível de oxigênio OK!";
     }
 
     return this;
   }
 
   verificarPh() {
     if (this.sensores.ph < 6.5 || this.sensores.ph > 8.5) {
       this.alerta = "Nível de pH fora do ideal";
     } else {
       this.alerta = "Nível de pH OK!";
     }
 
     return this;
   }
 
   verificarTemperatura() {
     if (this.sensores.temperatura < 22 || this.sensores.temperatura > 28) {
       this.alerta = "Temperatura fora do ideal";
     } else {
       this.alerta = "Temperatura OK!";
     }
 
     return this;
   }
 
   emitirAlerta() {
     this.verificarOxigenio();
     if (this.alerta === "Nível de oxigênio OK!") {
       this.verificarPh();
     }
     if (this.alerta === "Nível de pH OK!") {
       this.verificarTemperatura();
     }
     return this.alerta;
   }
 }
 
 module.exports = Alerta;
 