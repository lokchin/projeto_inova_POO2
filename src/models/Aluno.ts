export default class Aluno {
    private matricula_aluno: number;
    private nome_aluno: string;
    private email_aluno: string;

    constructor (matricula_aluno: number, nome_aluno: string, email_aluno: string) {
        this.matricula_aluno = matricula_aluno;
        this.nome_aluno = nome_aluno;
        this.email_aluno = email_aluno;
    }
    
    public getMatricula_aluno(): number {
        return this.matricula_aluno;
    }
    public setMatricula_aluno(value: number) {
        this.matricula_aluno = value;
    }
    
    
    public getNome_aluno(): string {
        return this.nome_aluno;
    }
    public setNome_aluno(value: string) {
        this.nome_aluno = value;
    }


    public getEmail_aluno(): string {
        return this.email_aluno;
    }
    public setEmail_aluno(value: string) {
        this.email_aluno = value;
    }
}