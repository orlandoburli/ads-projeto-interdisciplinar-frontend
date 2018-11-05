export class Usuario {
    id?: number;
    nome?: string;
    cpf?: string;
    email?: string;
    senha?: string;
}

export class UsuarioConsultaResponse {
    lista?: Usuario[];
    total?: number;
    paginas?: number;
}