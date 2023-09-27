import Avaliador from "../interfaces/Avaliador";
import { PrismaClient } from "@prisma/client";

export default class Professor implements Avaliador {

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

    async avaliarGrupo(grupo: string, inovacao: number, maturidade: number, apresentacao: number, potencial: number) {

        const prisma = new PrismaClient();

        try {
            await prisma.avaliacao.create({
                data: {
                    avaliador: this.nome,
                    nomeGrupo: grupo,
                    inovacao: inovacao,
                    maturidade: maturidade,
                    apresentacao: apresentacao,
                    potencial: potencial,
                }
            });
    
        } catch (error) {
            console.log(error);
        }
    }
}