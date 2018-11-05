import { UsuarioService } from './usuario.service';
import { PluginsModule } from './../../plugins/plugins.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';
import { GeralModule } from '../../geral/geral.module';

@NgModule({
  imports: [
    CommonModule,
    GeralModule,
    PluginsModule,
    UsuarioRoutingModule
  ],
  providers: [UsuarioService],
  declarations: [UsuarioComponent, UsuarioCadastroComponent, UsuarioConsultaComponent]
})
export class UsuarioModule { }
