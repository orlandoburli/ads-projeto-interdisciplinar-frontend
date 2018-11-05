import { UsuarioService } from './../usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Usuario, UsuarioConsultaResponse } from '../usuario.model';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-usuario-consulta',
  templateUrl: './usuario-consulta.component.html',
  styleUrls: ['./usuario-consulta.component.css']
})
export class UsuarioConsultaComponent implements OnInit {


  constructor(private router: Router, private activeRoute: ActivatedRoute, private usuarioService: UsuarioService) { }

  filtro: string = '';

  public displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'buttons'];

  dados: UsuarioConsultaResponse = { lista: [], total: 0, paginas: 0 };

  isLoadingResults = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.paginator.pageSize = 8;
    this.paginator.pageIndex = 0;

    this.sort.active = "nome";
    this.sort.direction = "asc";

    this.paginator.page.subscribe(() => this.atualizar());
    this.sort.sortChange.subscribe(() => this.pesquisar());

    this.pesquisar();
  }

  private pesquisar() {
    this.paginator.pageIndex = 0;

    this.atualizar();
  }

  atualizar() {
    this.isLoadingResults = true;

    this.usuarioService
      .pesquisar(this.filtro, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize)
      .subscribe((result) => {
        this.isLoadingResults = false;
        this.dados = result;
      }, (error) => {
        console.error(error);
        this.isLoadingResults = false;
      });
  }

  novo() {
    this.router.navigate(['new'], { relativeTo: this.activeRoute });
  }

  editar(u: Usuario) {
    this.router.navigate(['edit', u.id], { relativeTo: this.activeRoute });
  }

  excluir(u: Usuario) {
    this.router.navigate(['delete', u.id], { relativeTo: this.activeRoute });
  }

  visualizar(u: Usuario) {
    this.router.navigate(['view', u.id], { relativeTo: this.activeRoute });
  }
}
