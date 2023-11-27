import express from 'express';
import AlunoService from '../services/AlunoService';
import { Prisma } from '@prisma/client';

class AlunoController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const aluno: Prisma.AlunoCreateInput = req.body;

            const newAluno = await AlunoService.insert(aluno);

            if (newAluno == null) {
                return res.json(400).json({
                    status: 'aviso',
                    message: 'Usuário já inserido no banco de dados'
                })
            } else {
                return res.status(200).json({
                    status: 'ok',
                    aluno: newAluno
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
            const newAluno: Prisma.AlunoCreateInput = req.body;

            await AlunoService.update(newAluno);

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

            await AlunoService.delete(matricula);

            return res.status(200).json({
                status: 'ok',
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(res: express.Response) {

        try {
            const alunos = await AlunoService.getAll();

            return res.status(200).json({
                status: 'ok',
                alunos: alunos
            })
        } catch (error) {
            return res.status(500).json({
                error: error,
                message: 'Inserir os dados no corpo da requisição'
            })
        }
    }
}

export default new AlunoController();