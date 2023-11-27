import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProfessorService {

    async insert(professor: Prisma.ProfessorCreateInput) {
        try {
            const existed = await prisma.professor.findUnique({
                where: { matricula: professor.matricula }
            })

            if (existed != null)
                return null;
            else {
                const insert = await prisma.professor.create({
                    data: professor
                });
                return insert;
            }
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async update(professor : Prisma.ProfessorCreateInput) {
        try {
            await prisma.professor.update({
                where: { matricula: professor.matricula },
                data: professor
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async delete(matricula: string) {
        try {
            await prisma.professor.delete({
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
            return await prisma.professor.findMany();
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new ProfessorService();