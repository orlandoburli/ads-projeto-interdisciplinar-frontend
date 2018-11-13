import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfessorConsultaResponse, Professor } from './professor.model';

@Injectable()
export class ProfessorService {

  constructor(private client: HttpClient) { }

  /**
   * Pesquisa na tabela de professores
   * @param filtro Filtro para pesquisar
   * @param pageNumber Número da página
   * @param pageSize Tamanho da página
   */
  public pesquisar(filtro: string, ordenarPor: string, direcao: string, pageNumber: number, pageSize: number): Observable<ProfessorConsultaResponse> {
    return this.client.post<ProfessorConsultaResponse>('/api/professor/v1/pesquisar', {
      filtro: filtro,
      ordenar: ordenarPor,
      direcao: direcao.toUpperCase(),
      pageNumber: pageNumber,
      pageSize: pageSize
    });
  }

  /**
   * Retorna um professor pelo id
   * @param id Id do professor
   */
  public get(id: number): Observable<Professor> {
    return this.client.get<Professor>('api/professor/v1/' + id);
  }

  /**
   * Insere um professor
   * @param professor Professor a ser inserido.
   */
  public insert(professor: Professor): Observable<Professor> {
    return this.client.post<Professor>('/api/professor/v1', professor);
  }

  /**
   * Atualiza um professor.
   * @param Professor Professor a ser atualizado.
   */
  public update(Professor: Professor): Observable<Professor> {
    return this.client.put<Professor>('/api/professor/v1', Professor);
  }

  /**
   * Exclui um professor.
   * @param id Id do professor a ser excluído.
   */
  public delete(id: number) {
    return this.client.delete('api/professor/v1/' + id);
  }
}
