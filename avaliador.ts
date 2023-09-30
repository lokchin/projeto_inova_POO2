interface Avaliador {
    matricula: string;
    nome: string;
    email: string;

    avaliarGrupo(): void;
    
}
export class Professor implements Avaliador {
    constructor(public matricula: string, public nome: string, public email: string){}
    avaliarGrupo(): void {
        
    }
    
    calculaNotaGrupo(): void {

    }
}

export class Aluno implements Avaliador {
    constructor(public matricula: string, public nome: string, public email: string){}
    avaliarGrupo(): void {
        
    }
}

const professor = new Professor('12345678', 'Otávio', 'otaviolube@gmail.com');
const aluno = new Aluno('202299856', 'Vitor', 'vitorlugon@gmail.com');

console.log(professor);
console.log(aluno);