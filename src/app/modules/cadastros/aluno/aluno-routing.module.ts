import { AlunoCadastroComponent } from './aluno-cadastro/aluno-cadastro.component';
import { AlunoConsultaComponent } from './aluno-consulta/aluno-consulta.component';
import { AlunoComponent } from './aluno.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cadastros/aluno',
    component: AlunoComponent,
    children: [
      { path: '', component: AlunoConsultaComponent },
      { path: 'new', component: AlunoCadastroComponent },
      { path: 'edit/:id', component: AlunoCadastroComponent },
      { path: 'view/:id', component: AlunoCadastroComponent },
      { path: 'delete/:id', component: AlunoCadastroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlunoRoutingModule { }
