"use strict";
class Conta {
    numero;
    titular;
    constructor(numero, titular) {
        this.numero = numero;
        this.titular = titular;
    }
}
class ContaPF extends Conta {
}
class ContaPJ extends Conta {
}
const conta1 = new ContaPF(234515498, "Herman Roberts");
const conta2 = new ContaPJ(70124435, "Clarence Delgado");
console.log(conta1.titular);
console.log(conta2.titular);
