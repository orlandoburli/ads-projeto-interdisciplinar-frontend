import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';

const routes: Routes = [
  {
    path: 'cadastros/usuario',
    component: UsuarioComponent,
    children: [
      { path: '', component: UsuarioConsultaComponent },
      { path: 'new', component: UsuarioCadastroComponent },
      { path: 'edit/:id', component: UsuarioCadastroComponent },
      { path: 'view/:id', component: UsuarioCadastroComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
