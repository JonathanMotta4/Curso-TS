interface Tributos {
    taxaCalculo: number
    CalcularTributos(taxa: number): number
}


abstract class Conta {

    protected titular: string
    private readonly numero: number
    protected saldo: number


    constructor(titular: string,) {
        this.numero = this.gerarNumeroConta()
        this.titular = titular
        this.saldo = 0

    }
    private gerarNumeroConta() {
        return Math.floor(Math.random() * 100000000) + 1
    }
    protected info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Numero:${this.numero}`);

    }
    public get mostrarSaldo(): number {
        return this.saldo
    }
    set mudarSaldo(saldo: number) {
        this.saldo = saldo
    }
    protected deposito(valor: number) {
        if (valor > 0) {

            this.saldo += valor
        } else {
            console.log('valor invalido');
        }
    }
    protected saque(valor: number) {
        if (valor > 0 || valor >= this.saldo)
            this.saldo -= valor

    }
}
class ContaPF extends Conta implements Tributos {
    cpf: number
    taxaCalculo=10;
    
    CalcularTributos(taxa: number): number {
        return taxa*this.taxaCalculo
    }
    constructor(titular: string, saldo: number, cpf: number,) {
        super(titular)
        this.saldo = saldo
        this.cpf = cpf
        

    }
    info() {
        console.log(`Tipo:Pessoa Física`);

        super.info()
        console.log(`CPF:${this.cpf}`);
        console.log('-----------------------------');

    }
    deposito(valor: number) {

        if (valor < 5000) {
            super.deposito(valor)
        } else {
            console.log(`Valor invalido`);
        }
    }
    saque(valor: number) {

        if (valor < 2000) {
            super.saque(valor)
        } else {
            console.log(`Saldo insuficiente`);

        }
    }
}
class ContaPJ extends Conta {
    cnpj: number
    constructor(titular: string, saldo: number, cnpj: number) {
        super(titular)
        this.saldo = saldo
        this.cnpj = cnpj


    }
    info() {
        console.log(`Tipo:Pessoa Júridica`);

        super.info()
        console.log(`CNPJ:${this.cnpj}`);
        console.log('-----------------------------');

    }
    deposito(valor: number) {
        if (valor <= 20000) {
            super.deposito(valor)
        } else {
            console.log(`Valor invalido`);
        }
    }
    saque(valor: number) {
        if (valor <= 10000) {
            super.saque(valor)

        } else { console.log(`Valor invalido`); }
    }
}

const conta1 = new ContaPF("Herman Roberts", 254, 443100750089)
const conta2 = new ContaPJ("Clarence Delgado", 5746, 86213157844)

conta1.info()
console.log(conta1.CalcularTributos(15))