enum dias {
  domingo,
  segunda,
  terca,
  quarta,
  quinta,
  sexta,
  sabado,
}

/* console.log(dias.domingo)
console.log(dias['quinta'])
console.log(dias[2]) */

const d = new Date()
console.log(dias[d.getDay()]);

enum cores {
  branco = '#fff',
  preto = '#000',
  azul = '#00f',
  verde = '#0f0',
}

console.log(cores.preto)
console.log(cores['branco'])

enum tipoUsuario {
  USER=10,
  ADMIN=100,
  SUPER=1000,
}

console.log(tipoUsuario.ADMIN)


let tp:tipoUsuario=tipoUsuario.ADMIN
console.log(tp);
