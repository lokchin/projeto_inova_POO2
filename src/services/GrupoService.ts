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
            // await prisma.grupo.create({
            //     data: {
            //         nome: grupo.getNome(),
            //         // lider: grupo.getLider(),
            //         // membros: grupo.getMembros(),
            //         diaApresentacao: grupo.getDiaApresentacao(),
            //         estande: grupo.getEstande(),
            //     }
            // });
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