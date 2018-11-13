import { Disciplina } from './../disciplina.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/modules/geral/mensagem-service/mensagem.service';
import { DisciplinaService } from '../disciplina.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.css']
})
export class DisciplinaCadastroComponent implements OnInit {

  vo: Disciplina = {
    cargaHoraria: 0
  };
  acao: string = '';
  inscricoes: Subscription[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private msg: MensagemService,
    private disciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.acao = this.activeRoute.snapshot.url[0].path;

    let s1 = this.activeRoute.params.subscribe((dados) => {
      if (dados['id']) {
        this.disciplinaService.get(dados['id']).subscribe((u) => this.vo = u);
      }
    });

    this.inscricoes.push(s1);
  }

  ngAfterViewInit() {
    setTimeout(() => $('[autofocus]').focus(), 300);
  }

  voltar() {
    this.router.navigate(['cadastros', 'disciplina']);
  }

  salvar() {
    if (this.acao == 'new') {
      let s = this.disciplinaService.insert(this.vo).subscribe((r) => {
        this.voltar();
      }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));
      this.inscricoes.push(s);
    } else if (this.acao == 'edit') {
      let s = this.disciplinaService.update(this.vo).subscribe((r) => {
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
    let s = this.disciplinaService.delete(this.vo.id).subscribe((r) => {
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


}
