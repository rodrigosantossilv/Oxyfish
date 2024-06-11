class Alarme {
    constructor(ph, nivelOxigenio, temperatura) {
        this.ph = ph;
        this.nivelOxigenio = nivelOxigenio;
        this.temperatura = temperatura;
        this.alerta = "";
    }

    verificarAlerta() {
        if (this.nivelOxigenio.valor < 20) {
            this.alerta = "Alerta: Nível de oxigênio baixo!";
        } else if (this.ph.valor < 6.5 || this.ph.valor > 8.5) {
            this.alerta = "Alerta: pH fora da faixa ideal!";
        } else if (this.temperatura.valor < 18 || this.temperatura.valor > 30) {
            this.alerta = "Alerta: Temperatura fora da faixa ideal!";
        } else {
            this.alerta = "Tudo OK!";
        }

        return this.alerta;
    }
}

module.exports = Alarme;
