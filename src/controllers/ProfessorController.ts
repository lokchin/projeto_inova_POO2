import express from 'express';
import Professor from '../models/Professor';
import ProfessorService from '../services/ProfessorService';

class ProfessorController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const { matricula, nome, email } = req.body;

            const professor = await ProfessorService.insert(new Professor(matricula, nome, email));

            return res.json(professor);
        } catch (error) {
            console.log(error);
        }
    }

    public async update(req: express.Request, res: express.Response) {

        try {
            const antigaMatricula = req.params.matricula;
            const { matricula, nome, email } = req.body;

            const professor = await ProfessorService.update(antigaMatricula, new Professor(matricula, nome, email));

            return res.json(professor);
        } catch (error) {
            console.log(error);
        }
    }

    public async delete(req: express.Request, res: express.Response) {

        try {
            const matricula = req.params.matricula;

            const professor = await ProfessorService.delete(matricula);

            return res.json(professor);
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(req: express.Request, res: express.Response) {

        try {
            const professors = await ProfessorService.getAll();

            return res.json(professors);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ProfessorController();