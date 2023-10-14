import express from 'express';
import AlunoRoute from './routes/AlunoRoute';
import ProfessorRoute from './routes/ProfessorRoute';
import GrupoRoute from './routes/GrupoRoute';

export default class App {

    private app: express.Application;
    private port = 8080;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.routes();
        this.listen();
    }

    public getApp(): express.Application {
        return this.app;
    }

    private listen(): void {
        this.app.listen(this.port, () => console.log("servidor iniciado na porta " + this.port));
    }

    private routes(): void {
        this.app.use("/aluno", AlunoRoute);
        this.app.use("/professor", ProfessorRoute);
        this.app.use("/grupo", GrupoRoute);
    }
}