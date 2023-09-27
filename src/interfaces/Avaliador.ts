export default interface Avaliador {

    avaliarGrupo(
        grupo: string,
        inovacao: number,
        maturidade: number,
        apresentacao: number,
        potencial: number
    ): void;
}