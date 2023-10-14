import { PrismaClient } from "@prisma/client";
import Grupo from "../models/Grupo";

const prisma = new PrismaClient();

class GrupoService {

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
        } catch (error) {
            console.log(error);
        }
    }

    async update(nome: string, grupo: Grupo) {
        try {
            await prisma.grupo.update({
                where: { nome: nome },
                data: {
                    nome: grupo.getNome(),
                    lider: {
                        connect: {
                            matricula: grupo.getLider().getMatricula(),
                        },
                    },
                }
            });
        } catch (error) {
            console.log(error);
        }
    }

    async delete(nome: string) {
        try {
            await prisma.grupo.delete({
                where: { nome: nome },
            });
        } catch (error) {
            console.log(error);
        }
    }

    async getAll() {
        try {
            return await prisma.grupo.findMany();
        } catch (error) {
            console.log(error);
        }
    }
}

export default new GrupoService();