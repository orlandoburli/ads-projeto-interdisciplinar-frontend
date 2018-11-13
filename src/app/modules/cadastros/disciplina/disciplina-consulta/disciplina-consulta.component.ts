import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';
import { DisciplinaConsultaResponse, Disciplina } from '../disciplina.model';
import { DisciplinaService } from '../disciplina.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-disciplina-consulta',
  templateUrl: './disciplina-consulta.component.html',
  styleUrls: ['./disciplina-consulta.component.css']
})
export class DisciplinaConsultaComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute, private disciplinaService: DisciplinaService) { }

  filtro: string = '';
  status: string = '';

  public displayedColumns: string[] = ['id', 'nome', 'cargaHoraria', 'buttons'];

  dados: DisciplinaConsultaResponse = { lista: [], total: 0, paginas: 0 };

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

    this.disciplinaService
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

  editar(d: Disciplina) {
    this.router.navigate(['edit', d.id], { relativeTo: this.activeRoute });
  }

  excluir(d: Disciplina) {
    this.router.navigate(['delete', d.id], { relativeTo: this.activeRoute });
  }

  visualizar(d: Disciplina) {
    this.router.navigate(['view', d.id], { relativeTo: this.activeRoute });
  }
}
