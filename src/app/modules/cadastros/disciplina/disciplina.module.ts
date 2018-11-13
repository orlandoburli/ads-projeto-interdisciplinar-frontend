import { DisciplinaService } from './disciplina.service';
import { PluginsModule } from './../../plugins/plugins.module';
import { GeralModule } from './../../geral/geral.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DisciplinaRoutingModule } from './disciplina-routing.module';
import { DisciplinaComponent } from './disciplina.component';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaConsultaComponent } from './disciplina-consulta/disciplina-consulta.component';

@NgModule({
  imports: [
    CommonModule,
    GeralModule,
    PluginsModule,
    DisciplinaRoutingModule
  ],
  providers :[DisciplinaService],
  declarations: [DisciplinaComponent, DisciplinaCadastroComponent, DisciplinaConsultaComponent]
})
export class DisciplinaModule { }
