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
const Professor_1 = __importDefault(require("./models/Professor"));
const Grupo_1 = __importDefault(require("./models/Grupo"));
const Aluno_1 = __importDefault(require("./models/Aluno"));
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const jorgeAragao = new Professor_1.default("1", "jorgearagao", "jorgearagao@gmail.com");
        const duduNobre = new Aluno_1.default("202201524", "dudu", "dudunobre@gmail.com");
        const membros = [duduNobre];
        const grupoRevelacao = new Grupo_1.default("gruporevelacao", duduNobre, membros, new Date(2023, 9, 14), 42);
        jorgeAragao.avaliarGrupo(grupoRevelacao.getNome(), 5, 7, 9, 8);
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
