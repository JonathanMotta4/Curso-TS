class Conta {
    protected titular: string
    protected numero: number

    constructor(titular: string) {
        this.numero = this.gerarNumeroConta()
        this.titular = titular
    }
    private gerarNumeroConta() {
        return Math.floor(Math.random() * 100000000) + 1
    }
     protected info() {
        console.log(`Titular:${this.titular}`);
        console.log(`Numero:${this.numero}`);
        console.log('-----------------------------');
        
    }
}
class ContaPF extends Conta {
    cpf: number
    constructor(titular: string, cpf: number) {
        super(titular)
        this.cpf = cpf
        console.log(`Conta PF criada:${titular}`);

    }
}
class ContaPJ extends Conta {
    cnpj: number
    constructor(titular: string, cnpj: number) {
        super(titular)
        this.cnpj = cnpj
        console.log(`Conta PJ criada:${titular}`);
    }
}

const conta1 = new ContaPF("Herman Roberts", 443100750089)
const conta2 = new ContaPJ("Clarence Delgado", 86213157844)

conta1.info()
conta2.info()
