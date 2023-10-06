import { PrismaClient } from "@prisma/client";
import Avaliador from "../interfaces/Avaliador";
import Grupo from "./Grupo";

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

    async avaliarGrupo(grupo: Grupo, nota: number) {

        const prisma = new PrismaClient();

        try {

            // Cria um registro na tabela avaliação sem especificar o nome do grupo
            await prisma.avaliacao.create({
                data: {
                    avaliador: this.nome,
                    grupo: {
                        connect: {
                            nome: grupo.getNome(),
                        }
                    },
                    nota: nota,
                }
            });

            // Adiciona o nome do grupo no registro criado previamente
            await prisma.avaliacao.update({
                where: {
                    avaliador_nomeGrupo: {
                        avaliador: this.nome,
                        nomeGrupo: grupo.getNome(),
                    },
                },
                data: {
                    nomeGrupo: grupo.getNome(),
                }
            });

        } catch (error) {
            console.log(error);
        }
    }
}