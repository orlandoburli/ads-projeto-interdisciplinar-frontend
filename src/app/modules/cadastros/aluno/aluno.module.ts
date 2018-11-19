import { AlunoService } from './aluno.service';
import { GeralModule } from './../../geral/geral.module';
import { PluginsModule } from './../../plugins/plugins.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunoRoutingModule } from './aluno-routing.module';
import { AlunoComponent } from './aluno.component';
import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import { AlunoConsultaComponent } from './aluno-consulta/aluno-consulta.component';

@NgModule({
  imports: [
    CommonModule,
    PluginsModule,
    GeralModule,
    AlunoRoutingModule
  ],
  providers:[AlunoService],
  declarations: [AlunoComponent, AlunoCadastroComponent, AlunoConsultaComponent]
})
export class AlunoModule { }
