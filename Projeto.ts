export default class Projeto {
    private titulo: string;
    private descricao: string;

    constructor (titulo: string, descricao: string) {
        this.titulo = titulo;
        this.descricao = descricao;
    }

    public getTitulo(): string {
        return this.titulo;
    }
    public setTitulo(value: string) {
        this.titulo = value;
    }

    public getDescricao(): string {
        return this.descricao;
    }
    public setDescricao(value: string) {
        this.descricao = value;
    }
}