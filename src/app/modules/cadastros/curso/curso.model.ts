import { Disciplina } from './../disciplina/disciplina.model';

export class Curso {
    id?: number;
    nome?: string;
    quantidadeSemestres?: number;
    status?: 'Ativo' | 'Inativo';
    semestres?: Semestre[];
}

export class Semestre {
    id?: number;
    numero?: number;
    disciplinas?: Disciplina[];
}

export class CursoConsultaResponse {
    lista?: Curso[];
    total?: number;
    paginas?: number;
}