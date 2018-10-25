import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule
  ],
  declarations: [UsuarioComponent, UsuarioCadastroComponent, UsuarioConsultaComponent]
})
export class UsuarioModule { }
