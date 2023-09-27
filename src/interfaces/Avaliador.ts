import Aluno from "../models/Aluno";
import Professor from "../models/Professor";
import Grupo from "../models/Grupo";

export default interface Avaliador {

    avaliarGrupo(
        grupo: string,
        inovacao: number,
        maturidade: number,
        apresentacao: number,
        potencial: number
    ): void;
}