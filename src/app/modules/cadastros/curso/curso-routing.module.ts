import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoComponent } from './curso.component';
import { CursoConsultaComponent } from './curso-consulta/curso-consulta.component';
import { CursoCadastroComponent } from './curso-cadastro/curso-cadastro.component';

const routes: Routes = [
  {
    path: 'cadastros/curso',
    component: CursoComponent,
    children: [
      { path: '', component: CursoConsultaComponent },
      { path: 'new', component: CursoCadastroComponent },
      { path: 'edit/:id', component: CursoCadastroComponent },
      { path: 'view/:id', component: CursoCadastroComponent },
      { path: 'delete/:id', component: CursoCadastroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
