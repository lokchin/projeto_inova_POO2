import express from 'express';
import ProfessorService from '../services/ProfessorService';
import { Prisma } from '@prisma/client';

class ProfessorController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const professor: Prisma.ProfessorCreateInput = req.body;

            const newProfessor = await ProfessorService.insert(professor);

            if (newProfessor == null) {
                return res.json(400).json({
                    status: 'aviso',
                    message: 'Usuário já inserido no banco de dados'
                })
            } else {
                return res.status(200).json({
                    status: 'ok',
                    professor: newProfessor
                })
            }
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Inserir os dados no corpo da requisição'
            })
        }
    }

    public async update(req: express.Request, res: express.Response) {

        try {
            const newProfessor: Prisma.ProfessorCreateInput = req.body;

            await ProfessorService.update(newProfessor);

            return res.status(200).json({
                status: 'ok',
            })
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Inserir os dados no corpo da requisição'
            })
        }
    }

    public async delete(req: express.Request, res: express.Response) {

        try {
            const matricula = req.params.matricula;

            await ProfessorService.delete(matricula);

            return res.status(200).json({
                status: 'ok',
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(res: express.Response) {

        try {
            const professores = await ProfessorService.getAll();

            return res.status(200).json({
                status: 'ok',
                professores: professores
            })
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Inserir os dados no corpo da requisição'
            })
        }
    }
}

export default new ProfessorController();