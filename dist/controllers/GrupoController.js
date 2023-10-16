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
const Grupo_1 = __importDefault(require("../models/Grupo"));
const Aluno_1 = __importDefault(require("../models/Aluno"));
const GrupoService_1 = __importDefault(require("../services/GrupoService"));
class ProfessorController {
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { nome, lider, membros, diaApresentacao, estande } = req.body;
                const grupo = yield GrupoService_1.default.insert(new Grupo_1.default(nome, new Aluno_1.default(lider.matricula, lider.nome, lider.email), membros, diaApresentacao, estande));
                return res.json(grupo);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const antigoNome = req.params.nome;
                const { nome, lider, membros, diaApresentacao, estande } = req.body;
                const grupo = yield GrupoService_1.default.update(antigoNome, new Grupo_1.default(nome, new Aluno_1.default(lider.matricula, lider.nome, lider.email), membros, diaApresentacao, estande));
                return res.json(grupo);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const nome = req.params.nome;
                const grupo = yield GrupoService_1.default.delete(nome);
                return res.json(grupo);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const grupos = yield GrupoService_1.default.getAll();
                return res.json(grupos);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new ProfessorController();
