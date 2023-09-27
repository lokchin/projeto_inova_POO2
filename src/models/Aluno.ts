import Avaliador from "../interfaces/Avaliador";

export default class Aluno implements Avaliador {

    private matricula: string;
    private nome: string;
    private email: string;

    constructor(matricula: string, nome: string, email: string) {
        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
    }

    public getMatricula(): string {
        return this.matricula;
    }
    public setMatricula(value: string) {
        this.matricula = value;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }

    public getEmail(): string {
        return this.email;
    }
    public setEmail(value: string) {
        this.email = value;
    }

    avaliarGrupo(grupo: string, inovacao: number, maturidade: number, apresentacao: number, potencial: number): void {

    }
}