import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class AlunoService {

    async insert(aluno: Prisma.AlunoCreateInput) {
        try {
            const existed = await prisma.aluno.findUnique({
                where: { matricula: aluno.matricula }
            })

            if (existed != null)
                return null;
            else {
                const insert = await prisma.aluno.create({
                    data: aluno
                });
                return insert;
            }
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async update(aluno : Prisma.AlunoCreateInput) {
        try {
            await prisma.aluno.update({
                where: { matricula: aluno.matricula },
                data: aluno
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async delete(matricula: string) {
        try {
            await prisma.aluno.delete({
                where: { matricula: matricula },
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async getAll() {
        try {
            const alunos = await prisma.aluno.findMany();
            return alunos;
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new AlunoService();