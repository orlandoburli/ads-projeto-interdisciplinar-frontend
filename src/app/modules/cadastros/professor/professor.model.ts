export class Professor {
    id?: number;
    nome?: string;
    cpf?: string;
    email?: string;
    senha?: string;
}

export class ProfessorConsultaResponse {
    lista?: Professor[];
    total?: number;
    paginas?: number;
}
