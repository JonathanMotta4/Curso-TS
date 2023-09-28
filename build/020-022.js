"use strict";
class Conta {
    titular;
    numero;
    constructor(titular) {
        this.numero = this.gerarNumeroConta();
        this.titular = titular;
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 100000000) + 1;
    }
    info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Numero:${this.numero}`);
        console.log('-----------------------------');
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(titular, cpf) {
        super(titular);
        this.cpf = cpf;
        console.log(`Conta PF criada:${titular}`);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(titular, cnpj) {
        super(titular);
        this.cnpj = cnpj;
        console.log(`Conta PJ criada:${titular}`);
    }
}
const conta1 = new ContaPF("Herman Roberts", 443100750089);
const conta2 = new ContaPJ("Clarence Delgado", 86213157844);
conta1.info();
conta2.info();
