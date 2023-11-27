import express from 'express';
import GrupoService from '../services/GrupoService';
import { Prisma } from '@prisma/client';

class ProfessorController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const grupo : Prisma.GrupoCreateInput = req.body

            const newGrupo = await GrupoService.insert(grupo);

            if (newGrupo == null) {
                return res.json(400).json({
                    status: 'aviso',
                    message: 'Usuário já inserido no banco de dados'
                })
            } else {
                return res.status(200).json({
                    status: 'ok',
                    grupo: newGrupo
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
            const newGrupo : Prisma.GrupoCreateInput = req.body

            await GrupoService.update(newGrupo);

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
            const nome = req.params.nome;

            await GrupoService.delete(nome);

            return res.status(200).json({
                status: 'ok',
            })
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(res: express.Response) {

        try {
            const grupos = await GrupoService.getAll();

            return res.status(200).json({
                status: 'ok',
                grupos: grupos
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