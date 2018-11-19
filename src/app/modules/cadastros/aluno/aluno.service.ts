import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlunoConsultaResponse, Aluno } from './aluno.model';
import { Observable } from 'rxjs';

@Injectable()
export class AlunoService {

  constructor(private client: HttpClient) { }

  /**
   * Pesquisa na tabela de alunos
   * @param filtro Filtro para pesquisar
   * @param pageNumber Número da página
   * @param pageSize Tamanho da página
   */
  public pesquisar(filtro: string, ordenarPor: string, direcao: string, pageNumber: number, pageSize: number): Observable<AlunoConsultaResponse> {
    return this.client.post<AlunoConsultaResponse>('/api/aluno/v1/pesquisar', {
      filtro: filtro,
      ordenar: ordenarPor,
      direcao: direcao.toUpperCase(),
      pageNumber: pageNumber,
      pageSize: pageSize
    });
  }

  /**
   * Retorna um aluno pelo id
   * @param id Id do aluno
   */
  public get(id: number): Observable<Aluno> {
    return this.client.get<Aluno>('api/aluno/v1/' + id);
  }

  /**
   * Insere um aluno
   * @param aluno Aluno a ser inserido.
   */
  public insert(aluno: Aluno): Observable<Aluno> {
    return this.client.post<Aluno>('/api/aluno/v1', aluno);
  }

  /**
   * Atualiza um aluno.
   * @param aluno Aluno a ser atualizado.
   */
  public update(aluno: Aluno): Observable<Aluno> {
    return this.client.put<Aluno>('/api/aluno/v1', aluno);
  }

  /**
   * Exclui um aluno.
   * @param id Id do aluno a ser excluído.
   */
  public delete(id: number) {
    return this.client.delete('api/aluno/v1/' + id);
  }
}
