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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class AlunoService {
    insert(aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.aluno.create({
                    data: {
                        matricula: aluno.getMatricula(),
                        nome: aluno.getNome(),
                        email: aluno.getEmail(),
                    }
                });
            }
            catch (error) {
                console.log(error);
                yield prisma.$disconnect();
                process.exit(1);
            }
            finally {
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    update(matricula, aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.aluno.update({
                    where: { matricula: matricula },
                    data: {
                        matricula: aluno.getMatricula(),
                        nome: aluno.getNome(),
                        email: aluno.getEmail(),
                    }
                });
            }
            catch (error) {
                console.log(error);
                yield prisma.$disconnect();
                process.exit(1);
            }
            finally {
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    delete(matricula) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.aluno.delete({
                    where: { matricula: matricula },
                });
            }
            catch (error) {
                console.log(error);
                yield prisma.$disconnect();
                process.exit(1);
            }
            finally {
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield prisma.aluno.findMany();
            }
            catch (error) {
                console.log(error);
                yield prisma.$disconnect();
                process.exit(1);
            }
            finally {
                yield prisma.$disconnect();
                process.exit(1);
            }
        });
    }
}
exports.default = new AlunoService();
