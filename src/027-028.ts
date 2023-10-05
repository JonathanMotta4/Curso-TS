interface Curso {
    titulo: string
    descricao: string
    nAulas: number
    maxAlunos?: number
    iniciarCurso?(s: string): void
}

interface CursoProgramação extends Curso {
    nAulas: number
    maxAlunos?: number

}
interface CursoDesign extends Curso {
    nAulas: number
    maxAlunos?: number
}


let curso1: CursoProgramação = {
    titulo: "Typescript", descricao: "stairs make stop constantly", nAulas: 87, maxAlunos: 33,
}

let curso2: CursoDesign
curso2 = { titulo: 'Painting', descricao: "equal explore farmer ordinary", nAulas: 78 }
console.log(curso1)
console.log(curso2)


