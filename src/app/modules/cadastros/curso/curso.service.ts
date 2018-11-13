import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CursoConsultaResponse, Curso } from './curso.model';
import { Dados } from '../../geral/model/dados.model';

@Injectable()
export class CursoService {

  constructor(private client: HttpClient) { }

  /**
 * Pesquisa na tabela de cursos
 * @param filtro Filtro para pesquisar
 * @param status Status para pesquisar
 * @param pageNumber Número da página
 * @param pageSize Tamanho da página
 */
  public pesquisar(filtro: string, status: string, ordenarPor: string, direcao: string, pageNumber: number, pageSize: number): Observable<CursoConsultaResponse> {
    return this.client.post<CursoConsultaResponse>('/api/curso/v1/pesquisar', {
      filtro: filtro,
      status: status,
      ordenar: ordenarPor,
      direcao: direcao.toUpperCase(),
      pageNumber: pageNumber,
      pageSize: pageSize
    });
  }

  /**
   * Retorna um curso pelo id
   * @param id Id do curso
   */
  public get(id: number): Observable<Curso> {
    return this.client.get<Curso>('api/curso/v1/' + id);
  }

  /**
   * Insere um curso
   * @param curso Curso a ser inserido.
   */
  public insert(curso: Curso): Observable<Curso> {
    return this.client.post<Curso>('/api/curso/v1', curso);
  }

  /**
   * Atualiza um curso.
   * @param curso Curso a ser atualizado.
   */
  public update(curso: Curso): Observable<Curso> {
    return this.client.put<Curso>('/api/curso/v1', curso);
  }

  /**
   * Exclui um curso.
   * @param id Id do curso a ser excluído.
   */
  public delete(id: number) {
    return this.client.delete('api/curso/v1/' + id);
  }

  /**
   * Retorna dados para a tela de cadastro de curso.
   */
  public dados() : Observable<Dados> {
    return this.client.get<Dados>('api/curso/v1/dados');
  }
}
