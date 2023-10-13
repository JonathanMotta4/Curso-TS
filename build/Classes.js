"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Objeto = exports.Pessoa2 = void 0;
const Words = ['cabin', 'shown', 'organized', 'path', 'settle', 'mysterious', 'discover', 'card', 'center', 'shallow', 'nose', 'weight', 'public', 'which', 'slip', 'all', 'term', 'grass', 'balloon', 'birthday', 'perhaps', 'officer', 'similar', 'where'];
class Pessoa2 {
    nome;
    peso;
    constructor(nome, peso) {
        this.nome = nome;
        this.peso = peso;
    }
}
exports.Pessoa2 = Pessoa2;
class Objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto = Objeto;
exports.default = Words;
