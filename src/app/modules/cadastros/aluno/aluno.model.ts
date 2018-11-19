export class Aluno {
    id?: number;
    nome?: string;
    cpf?: string;
    email?: string;
    senha?: string;
    rg?: string;
    emissorRg?: string;
    dataNascimento?: string;
    resetarSenha?: string;
    enderecos?: Endereco[];
}

export class Endereco {
    id?: number;
    tipoEndereco?: string;
    cep?: number;
    logradouro?: string;
    complemento?: string;
    bairro?: string;
    cidade?: string;
    uf?: string;
}

export class AlunoConsultaResponse {
    lista?: Aluno[];
    total?: number;
    paginas?: number;
}
