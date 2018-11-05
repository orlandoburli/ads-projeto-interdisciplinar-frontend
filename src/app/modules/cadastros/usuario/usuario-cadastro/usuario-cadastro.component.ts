import { MensagemComponent } from './../../../geral/mensagem/mensagem.component';
import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MensagemService } from 'src/app/modules/geral/mensagem-service/mensagem.service';
import { Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent implements OnInit, OnDestroy {

  vo: Usuario = {};
  acao: string = '';
  inscricoes: Subscription[] = [];

  // dialogRef: MatDialogRef<MensagemComponent>;

  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    // private dialog: MatDialog,
    private msg: MensagemService,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.acao = this.activeRoute.snapshot.url[0].path;

    let s1 = this.activeRoute.params.subscribe((dados) => {
      if (dados['id']) {
        this.usuarioService.get(dados['id']).subscribe((u) => this.vo = u);
      }
    });

    this.inscricoes.push(s1);
  }

  voltar() {
    this.router.navigate(['cadastros', 'usuario']);
  }

  salvar() {
    if (this.acao == 'new') {
      let s = this.usuarioService.insert(this.vo).subscribe((r) => {
        this.voltar();
      }, (error) => this.inscricoes.push(this.msg.msgErroCadastro(error).subscribe((result) => null)));
      this.inscricoes.push(s);
    } else if (this.acao == 'edit') {
      let s = this.usuarioService.update(this.vo).subscribe((r) => {
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
    let s = this.usuarioService.delete(this.vo.id).subscribe((r) => {
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