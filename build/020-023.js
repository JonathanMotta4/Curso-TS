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
    mostrarSaldo() {
        return this.saldo;
    }
    deposito(valor) {
        this.saldo += valor;
    }
    saque(valor) {
        if (valor >= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log(`Saldo insuficiente`);
        }
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
        if (valor <= 15000) {
            super.deposito(valor);
        }
        else {
            console.log(`Valor invalido`);
        }
    }
    saque(valor) {
        if (valor >= this.saldo) {
            this.saldo -= valor;
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
        if (valor <= 50000) {
            super.deposito(valor);
        }
        else {
            console.log(`Valor invalido`);
        }
    }
}
const conta1 = new ContaPF("Herman Roberts", 254, 443100750089);
const conta2 = new ContaPJ("Clarence Delgado", 5746, 86213157844);
console.log(conta1.deposito(2000));
console.log(conta2.mostrarSaldo());
