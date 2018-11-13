export class Disciplina {
    id?: number;
    nome?: string;
    cargaHoraria?: number;
}

export class DisciplinaConsultaResponse {
    lista?: Disciplina[];
    total?: number;
    paginas?: number;
}