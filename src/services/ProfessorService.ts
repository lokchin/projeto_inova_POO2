import { PrismaClient } from "@prisma/client";
import Professor from "../models/Professor";

const prisma = new PrismaClient();

class ProfessorService {
    private static instance: ProfessorService | null = null;

    private constructor() { }

    static getInstance(): ProfessorService {
        if (ProfessorService.instance === null)
            ProfessorService.instance = new ProfessorService();
        return ProfessorService.instance;
    }

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
            console.log(error);
        }
    }

    async update(professor: Professor) {
        try {
            await prisma.professor.update({
                where: { matricula: professor.getMatricula() },
                data: {
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(professor: Professor) {
        try {
            await prisma.professor.delete({
                where: { matricula: professor.getMatricula() },
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default ProfessorService;