import { UsuarioConsultaResponse, Usuario } from './usuario.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService {

  constructor(private client: HttpClient) { }

  /**
   * Pesquisa na tabela de usuários
   * @param filtro Filtro para pesquisar
   * @param pageNumber Número da página
   * @param pageSize Tamanho da página
   */
  public pesquisar(filtro: string, ordenarPor: string, direcao: string, pageNumber: number, pageSize: number): Observable<UsuarioConsultaResponse> {
    return this.client.post<UsuarioConsultaResponse>('/api/usuario/v1/pesquisar', {
      filtro: filtro,
      ordenar: ordenarPor,
      direcao: direcao.toUpperCase(),
      pageNumber: pageNumber,
      pageSize: pageSize
    });
  }

  /**
   * Retorna um usuário pelo id
   * @param id Id do usuário
   */
  public get(id: number): Observable<Usuario> {
    return this.client.get<Usuario>('api/usuario/v1/' + id);
  }

  /**
   * Insere um usuário
   * @param usuario Usuário a ser inserido.
   */
  public insert(usuario: Usuario): Observable<Usuario> {
    return this.client.post<Usuario>('/api/usuario/v1', usuario);
  }

  /**
   * Atualiza um usuário.
   * @param usuario Usuário a ser atualizado.
   */
  public update(usuario: Usuario): Observable<Usuario> {
    return this.client.put<Usuario>('/api/usuario/v1', usuario);
  }

  /**
   * Exclui um usuário.
   * @param id Id do usuário a ser excluído.
   */
  public delete(id: number) {
    return this.client.delete('api/usuario/v1/' + id);
  }
}