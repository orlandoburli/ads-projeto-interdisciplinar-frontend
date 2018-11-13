import { ProfessorModule } from './professor/professor.module';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { UsuarioModule } from './usuario/usuario.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoModule } from './curso/curso.module';

@NgModule({
  imports: [
    CommonModule,
    UsuarioModule,
    CursoModule,
    DisciplinaModule,
    ProfessorModule
  ],
  declarations: []
})
export class CadastrosModule { }
