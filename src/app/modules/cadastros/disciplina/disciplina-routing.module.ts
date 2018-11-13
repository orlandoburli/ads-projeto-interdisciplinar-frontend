import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaConsultaComponent } from './disciplina-consulta/disciplina-consulta.component';
import { DisciplinaComponent } from './disciplina.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastros/disciplina',
    component: DisciplinaComponent,
    children: [
      { path: '', component: DisciplinaConsultaComponent },
      { path: 'new', component: DisciplinaCadastroComponent },
      { path: 'edit/:id', component: DisciplinaCadastroComponent },
      { path: 'view/:id', component: DisciplinaCadastroComponent },
      { path: 'delete/:id', component: DisciplinaCadastroComponent }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DisciplinaRoutingModule { }