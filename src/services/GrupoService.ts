import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class GrupoService {

    async insert(grupo: Prisma.GrupoCreateInput) {
        try {
            const existed = await prisma.grupo.findUnique({
                where: { nome: grupo.nome }
            })

            if (existed != null)
                return null;
            else {
                const insert = await prisma.grupo.create({
                    data: grupo
                });
                return insert;
            }
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async update(grupo: Prisma.GrupoCreateInput) {
        try {
            await prisma.grupo.update({
                where: { nome: grupo.nome },
                data: grupo
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async delete(nome: string) {
        try {
            await prisma.grupo.delete({
                where: { nome: nome },
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async getAll() {
        try {
            return await prisma.grupo.findMany();
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new GrupoService();