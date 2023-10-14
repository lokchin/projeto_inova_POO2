import { PrismaClient } from "@prisma/client";
import Professor from "../models/Professor";

const prisma = new PrismaClient();

class ProfessorService {

    async insert(professor: Professor) {
        try {
            await prisma.professor.create({
                data: {
                    matricula: professor.getMatricula(),
                    nome: professor.getNome(),
                    email: professor.getEmail(),
                }
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        } finally {
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async update(matricula: string, professor: Professor) {
        try {
            await prisma.professor.update({
                where: { matricula: matricula },
                data: {
                    matricula: professor.getMatricula(),
                    nome: professor.getNome(),
                    email: professor.getEmail(),
                }
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        } finally {
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
        } finally {
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
        } finally {
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new ProfessorService();