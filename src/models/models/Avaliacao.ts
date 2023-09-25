import Aluno from '../models/Aluno';
import Professor from '../models/Professor';

export default class Inovaweek {
    private avaliacao_aluno: Aluno[];
    private avaliacao_professor: Professor[];
    private inovacao: number;
    private maturidade: number;
    private atratividade: number;
    private apresentacao: number;
    private potencial: number;

    constructor(
        avaliacao_aluno: Aluno[],
        avaliacao_professor: Professor[],
        inovacao: number,
        maturidade: number,
        atratividade: number,
        apresentacao: number,
        potencial: number
    ) {
        this.avaliacao_aluno = avaliacao_aluno;
        this.avaliacao_professor = avaliacao_professor;
        this.inovacao = inovacao;
        this.maturidade = maturidade;
        this.atratividade = atratividade;
        this.apresentacao = apresentacao;
        this.potencial = potencial;
    }
    
    public getAvaliacao_professor(): Professor[] {
        return this.avaliacao_professor;
    }
    public setAvaliacao_professor(avaliacao_professor: Professor[]) {
        this.avaliacao_professor = avaliacao_professor;
    }

    public getInovacao(): number {
        return this.inovacao;
    }
    public setInovacao(inovacao: number) {
        this.inovacao = inovacao;
    }

    public getMaturidade(): number {
        return this.maturidade;
    }
    public setMaturidade(maturidade: number) {
        this.maturidade = maturidade;
    }

    public getAtratividade(): number {
        return this.atratividade;
    }
    public setAtratividade(atratividade: number) {
        this.atratividade = atratividade;
    }

    public getApresentacao(): number {
        return this.apresentacao;
    }
    public setApresentacao(apresentacao: number): void {
        this.apresentacao = apresentacao;
    }

    public getPotencial(): number {
        return this.potencial;
    }
    public setPotencial(potencial: number): void {
        this.potencial = potencial;
    }
}


