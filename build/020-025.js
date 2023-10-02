"use strict";
class Conta {
    titular;
    numero;
    saldo;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
        this.saldo = 0;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Numero:${this.numero}`);
    }
    get mostrarSaldo() {
        return this.saldo;
    }
    set mudarSaldo(saldo) {
        this.saldo = saldo;
    }
    deposito(valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
        else {
            console.log('valor invalido');
        }
    }
    saque(valor) {
        if (valor > 0 || valor >= this.saldo)
            this.saldo -= valor;
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(titular, saldo, cpf) {
        super(titular);
        this.saldo = saldo;
        this.cpf = cpf;
    }
    info() {
        console.log(`Tipo:Pessoa Física`);
        super.info();
        console.log(`CPF:${this.cpf}`);
        console.log('-----------------------------');
    }
    deposito(valor) {
        if (valor < 5000) {
            super.deposito(valor);
        }
        else {
            console.log(`Valor invalido`);
        }
    }
    saque(valor) {
        if (valor < 2000) {
            super.saque(valor);
        }
        else {
            console.log(`Saldo insuficiente`);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(titular, saldo, cnpj) {
        super(titular);
        this.saldo = saldo;
        this.cnpj = cnpj;
    }
    info() {
        console.log(`Tipo:Pessoa Júridica`);
        super.info();
        console.log(`CNPJ:${this.cnpj}`);
        console.log('-----------------------------');
    }
    deposito(valor) {
        if (valor <= 20000) {
            super.deposito(valor);
        }
        else {
            console.log(`Valor invalido`);
        }
    }
    saque(valor) {
        if (valor <= 10000) {
            super.saque(valor);
        }
        else {
            console.log(`Valor invalido`);
        }
    }
}
const conta1 = new ContaPF("Herman Roberts", 254, 443100750089);
const conta2 = new ContaPJ("Clarence Delgado", 5746, 86213157844);
console.log(conta1.mostrarSaldo);
conta1.saque(150);
console.log(conta1.mostrarSaldo);
conta1.mudarSaldo = 125;
console.log(conta1.mostrarSaldo);
