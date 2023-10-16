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
const Professor_1 = __importDefault(require("../models/Professor"));
const ProfessorService_1 = __importDefault(require("../services/ProfessorService"));
class ProfessorController {
    insert(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { matricula, nome, email } = req.body;
                const professor = yield ProfessorService_1.default.insert(new Professor_1.default(matricula, nome, email));
                return res.json(professor);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const antigaMatricula = req.params.matricula;
                const { matricula, nome, email } = req.body;
                const professor = yield ProfessorService_1.default.update(antigaMatricula, new Professor_1.default(matricula, nome, email));
                return res.json(professor);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const matricula = req.params.matricula;
                const professor = yield ProfessorService_1.default.delete(matricula);
                return res.json(professor);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const professors = yield ProfessorService_1.default.getAll();
                return res.json(professors);
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new ProfessorController();
