"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aluno {
    constructor(matricula, nome, email) {
        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
    }
    getMatricula() {
        return this.matricula;
    }
    setMatricula(value) {
        this.matricula = value;
    }
    getNome() {
        return this.nome;
    }
    setNome(value) {
        this.nome = value;
    }
    getEmail() {
        return this.email;
    }
    setEmail(value) {
        this.email = value;
    }
    avaliarGrupo(grupo, inovacao, maturidade, apresentacao, potencial) {
    }
}
exports.default = Aluno;
