import { PrismaClient } from "@prisma/client";
import Aluno from "../models/Aluno";

const prisma = new PrismaClient();

class AlunoService {

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

    async update(matricula: string, aluno: Aluno) {
        try {
            await prisma.aluno.update({
                where: { matricula: matricula },
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

    async delete(matricula: string) {
        try {
            await prisma.aluno.delete({
                where: { matricula: matricula },
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            return await prisma.aluno.findMany();
        } catch (error) {
            console.log(error);
        }
    }
}

export default new AlunoService();