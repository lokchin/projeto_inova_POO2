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
class ProfessorService {
    constructor() { }
    static getInstance() {
        if (ProfessorService.instance === null)
            ProfessorService.instance = new ProfessorService();
        return ProfessorService.instance;
    }
    insert(professor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.professor.create({
                    data: {
                        matricula: professor.getMatricula(),
                        nome: professor.getNome(),
                        email: professor.getEmail(),
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(professor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.professor.update({
                    where: { matricula: professor.getMatricula() },
                    data: {}
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(professor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.professor.delete({
                    where: { matricula: professor.getMatricula() },
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
ProfessorService.instance = null;
exports.default = ProfessorService;
