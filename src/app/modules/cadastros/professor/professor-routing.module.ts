import { ProfessorConsultaComponent } from './professor-consulta/professor-consulta.component';
import { ProfessorComponent } from './professor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';

const routes: Routes = [
  {
    path: 'cadastros/professor',
    component: ProfessorComponent,
    children: [
      { path: '', component: ProfessorConsultaComponent },
      { path: 'new', component: ProfessorCadastroComponent },
      { path: 'edit/:id', component: ProfessorCadastroComponent },
      { path: 'view/:id', component: ProfessorCadastroComponent },
      { path: 'delete/:id', component: ProfessorCadastroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfessorRoutingModule { }
