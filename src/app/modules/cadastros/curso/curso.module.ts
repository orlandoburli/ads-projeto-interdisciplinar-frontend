import { CursoService } from './curso.service';
import { GeralModule } from './../../geral/geral.module';
import { PluginsModule } from './../../plugins/plugins.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { CursoComponent } from './curso.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';
import { CursoConsultaComponent } from './curso-consulta/curso-consulta.component';
import { DisciplinaCursoFilterPipe } from './pipes/disciplina-curso-filter.pipe';
import { SemestreTotalHorasPipe } from './pipes/semestre-total-horas.pipe';
import { CursoTotalHorasPipe } from './pipes/curso-total-horas.pipe';

@NgModule({
  imports: [
    CommonModule,
    GeralModule,
    PluginsModule,
    CursoRoutingModule
  ],
  providers: [CursoService],
  declarations: [CursoComponent, CursoCadastroComponent, CursoConsultaComponent, DisciplinaCursoFilterPipe, SemestreTotalHorasPipe, CursoTotalHorasPipe]
})
export class CursoModule { }
