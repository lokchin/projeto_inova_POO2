import Projeto from "./Projeto";

export default class Estande {
    private numero: number;
    private nome: string;
    private projeto: Projeto;

    constructor (numero: number, nome: string, projeto: Projeto) {
        this.numero = numero;
        this.nome = nome;
        this.projeto = projeto;
    }

    public getNumero(): number {
        return this.numero;
    }
    public setNumero(value: number) {
        this.numero = value;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }

    public getProjeto(): Projeto {
        return this.projeto;
    }
    public setProjeto(value: Projeto) {
        this.projeto = value;
    }
}