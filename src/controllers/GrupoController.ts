import express from 'express';
import Grupo from '../models/Grupo';
import Aluno from '../models/Aluno';
import GrupoService from '../services/GrupoService';

class ProfessorController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const { nome, lider, membros, diaApresentacao, estande } = req.body

            const grupo = await GrupoService.insert(
                new Grupo(
                    nome,
                    new Aluno(lider.matricula, lider.nome, lider.email),
                    membros,
                    diaApresentacao,
                    estande
                )
            );

            return res.json(grupo);
        } catch (error) {
            console.log(error);
        }
    }

    public async update(req: express.Request, res: express.Response) {

        try {
            const antigoNome = req.params.nome;
            const { nome, lider, membros, diaApresentacao, estande } = req.body

            const grupo = await GrupoService.update(
                antigoNome,
                new Grupo(
                    nome,
                    new Aluno(lider.matricula, lider.nome, lider.email),
                    membros,
                    diaApresentacao,
                    estande
                )
            );

            return res.json(grupo);
        } catch (error) {
            console.log(error);
        }
    }

    public async delete(req: express.Request, res: express.Response) {

        try {
            const nome = req.params.nome;

            const grupo = await GrupoService.delete(nome);

            return res.json(grupo);
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(req: express.Request, res: express.Response) {

        try {
            const grupos = await GrupoService.getAll();

            return res.json(grupos);
        } catch (error) {
            console.log(error);
        }
    }
}

export default new ProfessorController();