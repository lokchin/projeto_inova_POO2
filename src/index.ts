import { PrismaClient } from '@prisma/client'
import AlunoService from './services/AlunoService';
import ProfessorService from './services/ProfessorService';
import GrupoService from './services/GrupoService';
import Professor from './models/Professor';
import Grupo from './models/Grupo';
import Aluno from './models/Aluno';

const prisma = new PrismaClient()

// Instanciando cada classe de serviço
const alunoService = AlunoService.getInstance();
const professorService = ProfessorService.getInstance();
const grupoService = GrupoService.getInstance();

async function main() {

  // Instanciando os objetos
  const otavio = new Professor("123456", "Otávio", "otaviolube@gmail.com");
  const joao = new Aluno("202201524", "João", "joao@ejuvv.com");
  const vitor = new Aluno("123", "Vitor", "vitor@gmail.com");
  const bruno = new Aluno("456", "Bruno", "bruno@gmail.com");
  const membros = [vitor, bruno];
  const vitalus = new Grupo("vitalus", joao, membros, new Date(10, 3, 2023), 42);

  /*
  Insere os objetos nas suas respectivas 
  tabelas usando os métodos de cada classe 
  de serviço correspondente
  */
  // await professorService.insert(otavio);
  // await alunoService.insert(joao);
  // await alunoService.insert(vitor);
  // await alunoService.insert(bruno);
  // await grupoService.insert(vitalus);

  /* 
  Insere avaliações na tabela avaliação 
  usando a função implementada na interface Avaliador
  */
  // await otavio.avaliarGrupo(vitalus, 10);
  // await joao.avaliarGrupo(vitalus, 9);
  // await vitor.avaliarGrupo(vitalus, 8);
  // await bruno.avaliarGrupo(vitalus, 7);

  // await professorService.delete(otavio);
  // await alunoService.delete(joao);
  // await alunoService.delete(vitor);
  // await alunoService.delete(bruno);
  // await grupoService.delete(vitalus);

  // otavio.removerAvaliacao(vitalus, otavio.getNome());
  // otavio.removerAvaliacao(vitalus, joao.getNome());
  // otavio.removerAvaliacao(vitalus, vitor.getNome());
  // otavio.removerAvaliacao(vitalus, bruno.getNome());
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