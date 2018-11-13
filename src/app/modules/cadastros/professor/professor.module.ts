import { ProfessorService } from './professor.service';
import { GeralModule } from './../../geral/geral.module';
import { PluginsModule } from './../../plugins/plugins.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfessorRoutingModule } from './professor-routing.module';
import { ProfessorComponent } from './professor.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
import { ProfessorConsultaComponent } from './professor-consulta/professor-consulta.component';

@NgModule({
  imports: [
    CommonModule,
    PluginsModule,
    GeralModule,
    ProfessorRoutingModule
  ],
  providers :[ProfessorService],
  declarations: [ProfessorComponent, ProfessorCadastroComponent, ProfessorConsultaComponent]
})
export class ProfessorModule { }
