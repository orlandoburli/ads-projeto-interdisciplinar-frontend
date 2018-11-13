import { Disciplina } from './../../disciplina/disciplina.model';
import { Semestre } from './../curso.model';
import { Dados } from './../../../geral/model/dados.model';
import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso.model';
import { CursoService } from '../curso.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/modules/geral/mensagem-service/mensagem.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-curso-cadastro',
  templateUrl: './curso-cadastro.component.html',
  styleUrls: ['./curso-cadastro.component.css']
})
export class CursoCadastroComponent implements OnInit {

  vo: Curso = {
    status: 'Ativo',
    semestres: []
  };
  acao: string = '';
  inscricoes: Subscription[] = [];

  dados: Dados = {
    disciplinas: []
  };

  filtroDisciplinaString = '';

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private msg: MensagemService,
    private cursoService: CursoService) { }

  ngOnInit() {
    this.acao = this.activeRoute.snapshot.url[0].path;

    this.atualizarDados();

    let s1 = this.activeRoute.params.subscribe((dados) => {
      if (dados['id']) {
        this.cursoService.get(dados['id']).subscribe((u) => this.vo = u);
      }
    });

    this.inscricoes.push(s1);
  }

  atualizarDados() {
    let s1 = this.cursoService
      .dados()
      .subscribe((retorno) => this.dados = retorno ? retorno : this.dados, (error) => console.log(error));
    this.inscricoes.push(s1);
  }

  ngAfterViewInit() {
    setTimeout(() => $('[autofocus]').focus(), 300);
  }

  voltar() {
    this.router.navigate(['cadastros', 'curso']);
  }

  salvar() {
    if (this.acao == 'new') {
      let s = this.cursoService.insert(this.vo).subscribe((r) => {
        this.voltar();
      }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));
      this.inscricoes.push(s);
    } else if (this.acao == 'edit') {
      let s = this.cursoService.update(this.vo).subscribe((r) => {
        this.voltar();
      }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));
      this.inscricoes.push(s);
    }
  }

  excluir() {
    let s = this.msg.confirmarExcluir().subscribe((result) => result ? this.confirmarExcluir() : null);
    this.inscricoes.push(s);
  }

  confirmarExcluir() {
    let s = this.cursoService.delete(this.vo.id).subscribe((r) => {
      this.voltar();
    }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));

    this.inscricoes.push(s);
  }

  isEnabled(): boolean {
    return this.acao == 'edit' || this.acao == 'new';
  }

  isSalvarEnabled(): boolean {
    return this.isEnabled();
  }

  isExcluirEnabled(): boolean {
    return this.acao == 'delete';
  }

  ngOnDestroy() {
    this.inscricoes.forEach((s) => s.unsubscribe());
  }

  // Operacoes dos semestres
  adicionarSemestre() {
    this.vo.semestres = this.vo.semestres || [];
    let ultimoSemestre = 0;
    this.vo.semestres.sort((a, b) => a.numero - b.numero).forEach(a => ultimoSemestre = a.numero);
    this.vo.semestres.push({ numero: ultimoSemestre + 1 });
  }

  removerSemestre(index: number) {
    let s = this.msg.confirmarExcluir().subscribe((confirmado) => {
      if (confirmado) {
        this.vo.semestres.splice(index, 1);
      }
    });
    this.inscricoes.push(s);
  }

  // Operações de disciplinas
  adicionarDisciplina(semestre: Semestre, disciplina: Disciplina) {
    semestre.disciplinas = semestre.disciplinas || [];
    semestre.disciplinas.push(disciplina);

    this.filtroDisciplinaString = '';
  }

  removerDisciplina(semestre: Semestre, disciplina: Disciplina) {
    let index = semestre.disciplinas.findIndex((a) => a.id == disciplina.id);
    semestre.disciplinas.splice(index, 1);

    this.filtroDisciplinaString = '';
  }
}