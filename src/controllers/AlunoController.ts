import express from 'express';
import Aluno from '../models/Aluno';
import AlunoService from '../services/AlunoService';

class AlunoController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const { matricula, nome, email } = req.body;

            const aluno = await AlunoService.insert(new Aluno(matricula, nome, email));

            return res.json(aluno);
        } catch (error) {
            console.log(error);
        }
    }

    public async update(req: express.Request, res: express.Response) {

        try {
            const antigaMatricula = req.params.matricula;
            const { matricula, nome, email } = req.body;

            const aluno = await AlunoService.update(antigaMatricula, new Aluno(matricula, nome, email));

            return res.json(aluno);
        } catch (error) {
            console.log(error);
        }
    }

    public async delete(req: express.Request, res: express.Response) {

        try {
            const matricula = req.params.matricula;

            const aluno = await AlunoService.delete(matricula);

            return res.json(aluno);
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(req: express.Request, res: express.Response) {

        try {
            const alunos = await AlunoService.getAll();

            return res.json(alunos);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new AlunoController();