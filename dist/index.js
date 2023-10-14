"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const AlunoService_1 = __importDefault(require("./services/AlunoService"));
const ProfessorService_1 = __importDefault(require("./services/ProfessorService"));
const GrupoService_1 = __importDefault(require("./services/GrupoService"));
const Professor_1 = __importDefault(require("./models/Professor"));
const Grupo_1 = __importDefault(require("./models/Grupo"));
const Aluno_1 = __importDefault(require("./models/Aluno"));
const prisma = new client_1.PrismaClient();
// Instanciando cada classe de serviço
const alunoService = AlunoService_1.default.getInstance();
const professorService = ProfessorService_1.default.getInstance();
const grupoService = GrupoService_1.default.getInstance();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Instanciando os objetos
        const otavio = new Professor_1.default("123456", "Otávio", "otaviolube@gmail.com");
        const joao = new Aluno_1.default("202201524", "João", "joao@ejuvv.com");
        const vitor = new Aluno_1.default("123", "Vitor", "vitor@gmail.com");
        const bruno = new Aluno_1.default("456", "Bruno", "bruno@gmail.com");
        const membros = [vitor, bruno];
        const vitalus = new Grupo_1.default("vitalus", joao, membros, new Date(10, 3, 2023), 42);
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
        yield professorService.delete(otavio);
        // await alunoService.delete(joao);
        // await alunoService.delete(vitor);
        // await alunoService.delete(bruno);
        // await grupoService.delete(vitalus);
        // otavio.removerAvaliacao(vitalus, otavio.getNome());
        // otavio.removerAvaliacao(vitalus, joao.getNome());
        // otavio.removerAvaliacao(vitalus, vitor.getNome());
        // otavio.removerAvaliacao(vitalus, bruno.getNome());
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
