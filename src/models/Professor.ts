export class Professor {
    private matricula_professor: number;
    private nome: string;
    private email: string;

    constructor(
        matricula_professor: number,
        nome: string,
        email: string
          ) {
        this.matricula_professor = matricula_professor;
        this.nome = nome;
        this.email = email;
    }

    public getMatricula_professor(): number {
        return this.matricula_professor;
    }
    public setMatricula_professor(matricula_professor: number): void {
        this.matricula_professor = matricula_professor;
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(nome: string): void {
        this.nome = nome;
    }

    public getEmail(): string {
        return this.email;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
}