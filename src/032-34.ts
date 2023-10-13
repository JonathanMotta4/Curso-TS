namespace Veiculos {
    enum Cores {
        'preto',
        'branco',
        'cinza',
        'azul',
        'vermelho',

    }
    abstract class Carro {
        private nome: string
        private motor: Motores.Motor
        private cor: string
        constructor(nome: string, motor: Motores.Motor, cor: Cores) {
            this.nome = nome
            this.motor = motor
            this.cor = Cores[cor]
        }
        public ligar() {
            this.motor.liga = true
        }
        public desligar() {
            this.motor.liga = false
        }
        get minhaCor() {
            return this.cor
        }
        get meuNome() {
            return this.nome
        }
        get ligado() {
            return (this.motor.liga ? "Ligado" : "Desligado")
        }
        get minhaPotencia() {
            return this.motor.potencia
        }
    }
    export class CarroEsportivo extends Carro {
        constructor(nome: string, cor: Cores) {
            super(nome, new Motores.Motor(8, 300,new Motores.Turbo(120)), 0)
        }
    }
    export class CarroPopular extends Carro {
        constructor(nome: string, cor: Cores) {
            super(nome, new Motores.Motor(4, 120), 2)
        }
    }

}
namespace Motores {
    export class Turbo {
        private pot: number
        constructor(pot: number) {
            this.pot = pot
        }
        get Pot() { return this.pot }

    }
    export class Motor {
        private ligado: boolean
        private cilindros: number
        private pot: number
        constructor(cilindros: number, pot: number, turbo?: Turbo) {
            this.ligado = false
            this.cilindros = cilindros
            this.pot = pot + (turbo ? turbo.Pot : 0)
        }
        set liga(ligado: boolean) { this.ligado = ligado }
        get liga() {
            return this.ligado
        }
        get potencia() {
            return this.pot
        }

    }
}


const ca1 = new Veiculos.CarroEsportivo('directly',0)
const ca2 = new Veiculos.CarroPopular('solid',4)

console.log(`Nome: ${ca1.meuNome}`);
console.log(`Cor: ${ca1.minhaCor}`);
console.log(`Potencia: ${ca1.minhaPotencia}`);
ca1.ligar()
console.log(`Ligado: ${ca1.ligado}\n`);

console.log(`Nome: ${ca2.meuNome}`);
console.log(`Cor: ${ca2.minhaCor}`);
console.log(`Potencia: ${ca2.minhaPotencia}`);
ca2.ligar()
console.log(`Ligado: ${ca2.ligado}\n`);
