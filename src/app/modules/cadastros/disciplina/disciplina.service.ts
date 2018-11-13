import { Disciplina, DisciplinaConsultaResponse } from './disciplina.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DisciplinaService {

  constructor(private client: HttpClient) { }

  /**
 * Pesquisa na tabela de disciplinas
 * @param filtro Filtro para pesquisar
 * @param pageNumber Número da página
 * @param pageSize Tamanho da página
 */
  public pesquisar(filtro: string, ordenarPor: string, direcao: string, pageNumber: number, pageSize: number): Observable<DisciplinaConsultaResponse> {
    return this.client.post<DisciplinaConsultaResponse>('/api/disciplina/v1/pesquisar', {
      filtro: filtro,
      ordenar: ordenarPor,
      direcao: direcao.toUpperCase(),
      pageNumber: pageNumber,
      pageSize: pageSize
    });
  }

  /**
   * Retorna uma disciplina pelo id
   * @param id Id da disciplina
   */
  public get(id: number): Observable<Disciplina> {
    return this.client.get<Disciplina>('api/disciplina/v1/' + id);
  }

  /**
   * Insere uma disciplina
   * @param disciplina Disciplina a ser inserida.
   */
  public insert(disciplina: Disciplina): Observable<Disciplina> {
    return this.client.post<Disciplina>('/api/disciplina/v1', disciplina);
  }

  /**
   * Atualiza uma disciplina.
   * @param disciplina Disciplina a ser atualizada.
   */
  public update(disciplina: Disciplina): Observable<Disciplina> {
    return this.client.put<Disciplina>('/api/disciplina/v1', disciplina);
  }

  /**
   * Exclui uma disciplina.
   * @param id Id da disciplina a ser excluída.
   */
  public delete(id: number) {
    return this.client.delete('api/disciplina/v1/' + id);
  }
}
