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
class GrupoService {
    constructor() { }
    static getInstance() {
        if (GrupoService.instance === null)
            GrupoService.instance = new GrupoService();
        return GrupoService.instance;
    }
    insert(grupo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Cria um registro na tabela grupo sem especificar a matrícula do líder
                yield prisma.grupo.create({
                    data: {
                        nome: grupo.getNome(),
                        lider: {
                            connect: {
                                matricula: grupo.getLider().getMatricula(),
                            },
                        },
                    }
                });
                // Adiciona a matrícula do líder no registro criado previamente
                yield prisma.grupo.update({
                    where: { nome: grupo.getNome() },
                    data: {
                        liderMatricula: grupo.getLider().getMatricula(),
                    }
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(grupo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.grupo.update({
                    where: { nome: grupo.getNome() },
                    data: {}
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(grupo) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield prisma.grupo.delete({
                    where: { nome: grupo.getNome() },
                });
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
GrupoService.instance = null;
exports.default = GrupoService;
