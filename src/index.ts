import { PrismaClient } from '@prisma/client'
import Professor from './models/Professor';
import Grupo from './models/Grupo';
import Aluno from './models/Aluno';

const prisma = new PrismaClient()

async function main() {
    const jorgeAragao = new Professor("1", "jorgearagao", "jorgearagao@gmail.com");
    const duduNobre = new Aluno("202201524", "dudu", "dudunobre@gmail.com");
    const membros: Aluno[] = [duduNobre];
    const grupoRevelacao = new Grupo("gruporevelacao", duduNobre, membros, new Date(2023, 9, 14), 42);

    jorgeAragao.avaliarGrupo(grupoRevelacao.getNome(), 5, 7, 9, 8);
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })