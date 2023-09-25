import Aluno from "./Aluno";

export class Grupo {
    private titulo: string;
    private membros: Aluno[];
    private descricao: string;

    constructor(
        titulo: string,
        membros: Aluno[],
        descricao: string
    ) {
        this.titulo = titulo;
        this.membros = membros;
        this.descricao = descricao;
    }

    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(titulo: string) {
        this.titulo = titulo;
    }

    public getMembros(): Aluno[] {
        return this.membros;
    }
    public setMembros(membros: Aluno[]) {
        this.membros = membros;
    }

    public getDescricao(): string {
        return this.descricao;
    }
    public setDescricao(descricao: string) {
        this.descricao = descricao;
    }
}