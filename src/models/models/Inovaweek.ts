import Estande from "./Estande";

export default class Inovaweek {
    private data: Date;
    private horario: string;
    private estantes: Estande[];

    constructor(data: Date, horario: string, estantes: Estande[]) {
        this.data = data;
        this.horario = horario;
        this.estantes = estantes;
    }

    public getData(): Date {
        return this.data;
    }
    public setData(value: Date) {
        this.data = value;
    }

    public getHorario() : string {
        return this.horario;
    }
    public setHorario(value: string) {
        this.horario = value;
    }

    public getEstandes(): Estande[] {
        return this.estantes;
    }
    public setEstandes(value: Estande[]) {
        this.estantes = value;
    }
    
}
