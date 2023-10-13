"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["preto"] = 0] = "preto";
        Cores[Cores["branco"] = 1] = "branco";
        Cores[Cores["cinza"] = 2] = "cinza";
        Cores[Cores["azul"] = 3] = "azul";
        Cores[Cores["vermelho"] = 4] = "vermelho";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = motor;
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get ligado() {
            return (this.motor.liga ? "Ligado" : "Desligado");
        }
        get minhaPotencia() {
            return this.motor.potencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(8, 300, new Motores.Turbo(120)), 0);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, cor) {
            super(nome, new Motores.Motor(4, 120), 2);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get Pot() { return this.pot; }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(cilindros, pot, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = pot + (turbo ? turbo.Pot : 0);
        }
        set liga(ligado) { this.ligado = ligado; }
        get liga() {
            return this.ligado;
        }
        get potencia() {
            return this.pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const ca1 = new Veiculos.CarroEsportivo('directly', 0);
const ca2 = new Veiculos.CarroPopular('solid', 4);
console.log(`Nome: ${ca1.meuNome}`);
console.log(`Cor: ${ca1.minhaCor}`);
console.log(`Potencia: ${ca1.minhaPotencia}`);
ca1.ligar();
console.log(`Ligado: ${ca1.ligado}\n`);
console.log(`Nome: ${ca2.meuNome}`);
console.log(`Cor: ${ca2.minhaCor}`);
console.log(`Potencia: ${ca2.minhaPotencia}`);
ca2.ligar();
console.log(`Ligado: ${ca2.ligado}\n`);
