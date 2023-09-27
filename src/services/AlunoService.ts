import { PrismaClient } from "@prisma/client";
import Aluno from "../models/Aluno";

const prisma = new PrismaClient();

class AlunoService {
    private static instance: AlunoService | null = null;

    private constructor() { }

    static getInstance(): AlunoService {
        if (AlunoService.instance === null)
            AlunoService.instance = new AlunoService();
        return AlunoService.instance;
    }

    async insert(aluno: Aluno) {
        try {
            await prisma.aluno.create({
                data: {
                    matricula: aluno.getMatricula(),
                    nome: aluno.getNome(),
                    email: aluno.getEmail(),
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async update(aluno: Aluno) {
        try {
            await prisma.aluno.update({
                where: { matricula: aluno.getMatricula() },
                data: {
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(aluno: Aluno) {
        try {
            await prisma.aluno.delete({
                where: { matricula: aluno.getMatricula() },
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default AlunoService;