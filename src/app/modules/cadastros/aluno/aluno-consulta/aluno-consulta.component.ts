import { AlunoService } from './../aluno.service';
import { Aluno, AlunoConsultaResponse } from './../aluno.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-aluno-consulta',
  templateUrl: './aluno-consulta.component.html',
  styleUrls: ['./aluno-consulta.component.css']
})
export class AlunoConsultaComponent implements OnInit {

  constructor(private router: Router, private activeRoute: ActivatedRoute, private alunoService: AlunoService) { }

  filtro: string = '';

  public displayedColumns: string[] = ['id', 'nome', 'email', 'cpf', 'buttons'];

  dados: AlunoConsultaResponse = { lista: [], total: 0, paginas: 0 };

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

  pesquisar() {
    this.paginator.pageIndex = 0;

    this.atualizar();
  }

  atualizar() {
    this.isLoadingResults = true;

    this.alunoService
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

  editar(a: Aluno) {
    this.router.navigate(['edit', a.id], { relativeTo: this.activeRoute });
  }

  excluir(a: Aluno) {
    this.router.navigate(['delete', a.id], { relativeTo: this.activeRoute });
  }

  visualizar(a: Aluno) {
    this.router.navigate(['view', a.id], { relativeTo: this.activeRoute });
  }
}
