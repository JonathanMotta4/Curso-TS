class Conta {
    public numero: number
    public titular: string

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta()
        this.titular = titular
    }
    gerarNumeroConta() {
        return Math.floor(Math.random() * 1000000) + 1
    }
}
class ContaPF extends Conta {
    cpf: number
    constructor(titular: string, cpf: number) {
        super(titular)
        this.cpf = cpf
    }
}
class ContaPJ extends Conta {
    cnpj: number
    constructor(titular: string, cnpj: number) {
        super(titular)
        this.cnpj = cnpj
    }
}

const conta1 = new ContaPF("Herman Roberts", 443100750089)
const conta2 = new ContaPJ("Clarence Delgado", 86213157844)
console.log(conta1.titular);
console.log(conta1.numero);
console.log(conta2.titular);
console.log(conta2.numero);
