import { CursoService } from './../curso.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CursoConsultaResponse, Curso } from '../curso.model';
import { MatPaginator, MatSort } from '@angular/material';

import * as $ from 'jquery';

@Component({
  selector: 'app-curso-consulta',
  templateUrl: './curso-consulta.component.html',
  styleUrls: ['./curso-consulta.component.css']
})
export class CursoConsultaComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute, private cursoService: CursoService) { }

  filtro: string = '';
  status: string = '';

  public displayedColumns: string[] = ['id', 'nome', 'quantidadeSemestres', 'status', 'buttons'];

  dados: CursoConsultaResponse = { lista: [], total: 0, paginas: 0 };

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

  ngAfterViewInit() {
    setTimeout(() => $('[autofocus]').focus(), 300);
  }

  pesquisar() {
    this.paginator.pageIndex = 0;

    this.atualizar();
  }

  atualizar() {
    this.isLoadingResults = true;

    this.cursoService
      .pesquisar(this.filtro, this.status, this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize)
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

  editar(c: Curso) {
    console.log(c);
    this.router.navigate(['edit', c.id], { relativeTo: this.activeRoute });
  }

  excluir(c: Curso) {
    this.router.navigate(['delete', c.id], { relativeTo: this.activeRoute });
  }

  visualizar(c: Curso) {
    this.router.navigate(['view', c.id], { relativeTo: this.activeRoute });
  }
}
