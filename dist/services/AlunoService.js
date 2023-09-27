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
    constructor() { }
    static getInstance() {
        if (AlunoService.instance === null)
            AlunoService.instance = new AlunoService();
        return AlunoService.instance;
    }
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
            }
        });
    }
    update(aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.aluno.update({
                    where: { matricula: aluno.getMatricula() },
                    data: {}
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.aluno.delete({
                    where: { matricula: aluno.getMatricula() },
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
AlunoService.instance = null;
exports.default = AlunoService;
