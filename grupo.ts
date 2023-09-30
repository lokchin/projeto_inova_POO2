import { Aluno } from "./avaliador";

export default class Grupo {
    
  constructor (public nomeGrupo: string, public lider: Aluno, public membros: Aluno[], public dataApresentacao: Date, public numeroEstande: number) {}
}|