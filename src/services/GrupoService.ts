import { PrismaClient } from "@prisma/client";
import Grupo from "../models/Grupo";

const prisma = new PrismaClient();

class GrupoService {
    private static instance: GrupoService | null = null;

    private constructor() { }

    static getInstance(): GrupoService {
        if (GrupoService.instance === null)
            GrupoService.instance = new GrupoService();
        return GrupoService.instance;
    }

    async insert(grupo: Grupo) {
        try {

            // Cria um registro na tabela grupo sem especificar a matrícula do líder
            await prisma.grupo.create({
                data: {
                    nome: grupo.getNome(),
                    lider: {
                        connect: {
                            matricula: grupo.getLider().getMatricula(),
                        },
                    },
                }
            });

            // Adiciona a matrícula do líder no registro criado previamente
            await prisma.grupo.update({
                where: { nome: grupo.getNome() },
                data: {
                    liderMatricula: grupo.getLider().getMatricula(),
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async update(grupo: Grupo) {
        try {
            await prisma.grupo.update({
                where: { nome: grupo.getNome() },
                data: {
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(grupo: Grupo) {
        try {
            await prisma.grupo.delete({
                where: { nome: grupo.getNome() },
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default GrupoService;