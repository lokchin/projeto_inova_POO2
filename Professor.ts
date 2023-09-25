export default class Professor {
    private matriculaProfessor: number;
    private nome: string;
    private email: string;

    constructor (matriculaProfessor: number, nome: string, email: string) {
        this.matriculaProfessor = matriculaProfessor;
        this.nome = nome;
        this.email = email;
    }

    public getMatriculaProfessor(): number {
        return this.matriculaProfessor;
    }
    public setMatriculaProfessor(value: number) {
        this.matriculaProfessor = value;
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
}