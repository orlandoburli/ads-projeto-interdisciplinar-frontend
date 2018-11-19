import { Aluno, Endereco } from './../aluno.model';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MensagemService } from 'src/app/modules/geral/mensagem-service/mensagem.service';
import { AlunoService } from '../aluno.service';

import * as $ from 'jquery';

@Component({
  selector: 'app-aluno-cadastro',
  templateUrl: './aluno-cadastro.component.html',
  styleUrls: ['./aluno-cadastro.component.css']
})
export class AlunoCadastroComponent implements OnInit {

  vo: Aluno = {};
  acao: string = '';
  inscricoes: Subscription[] = [];

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private msg: MensagemService,
    private alunoService: AlunoService) { }

  ngOnInit() {
    this.acao = this.activeRoute.snapshot.url[0].path;

    let s1 = this.activeRoute.params.subscribe((dados) => {
      if (dados['id']) {
        this.alunoService.get(dados['id']).subscribe((u) => this.vo = u);
      }
    });

    this.inscricoes.push(s1);
  }

  ngAfterViewInit() {
    setTimeout(() => $('[autofocus]').focus(), 300);
  }

  voltar() {
    this.router.navigate(['cadastros', 'aluno']);
  }

  salvar() {
    if (this.acao == 'new') {
      let s = this.alunoService.insert(this.vo).subscribe((r) => {
        this.voltar();
      }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));
      this.inscricoes.push(s);
    } else if (this.acao == 'edit') {
      let s = this.alunoService.update(this.vo).subscribe((r) => {
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
    let s = this.alunoService.delete(this.vo.id).subscribe((r) => {
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

  // Manipulação de endereços
  adicionarEndereco() {
    this.vo.enderecos = this.vo.enderecos || [];

    this.vo.enderecos.push({
      tipoEndereco: 'Residencial'
    })
  }

  removerEndereco(endereco: Endereco) {
    let s = this.msg.confirmarExcluir().subscribe((confirmado) => {
      if (confirmado) {
        this.vo.enderecos.splice(this.vo.enderecos.indexOf(endereco), 1);
      }
    });
    this.inscricoes.push(s);
  }
}
