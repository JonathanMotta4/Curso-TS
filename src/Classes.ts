const Words = ['cabin', 'shown', 'organized', 'path', 'settle', 'mysterious', 'discover', 'card', 'center', 'shallow', 'nose', 'weight', 'public', 'which', 'slip', 'all', 'term', 'grass', 'balloon', 'birthday', 'perhaps', 'officer', 'similar', 'where']

class Pessoa2 {
    nome: string
    peso: number
    constructor(nome: string, peso: number) {
        this.nome = nome
        this.peso = peso
    }
}

class Objeto {
    nome: string
    constructor(nome: string) {
        this.nome = nome
    }
}
export default Words
export { Pessoa2, Objeto }