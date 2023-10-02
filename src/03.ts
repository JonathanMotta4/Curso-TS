class Pessoa {
  nome = ''
  idade = 0

  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }
}

let p1 = new Pessoa('Jonathan', 22)

console.log(p1.nome, p1.idade)
