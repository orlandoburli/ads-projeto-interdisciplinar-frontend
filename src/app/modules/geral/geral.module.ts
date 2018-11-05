import { MensagemService } from './mensagem-service/mensagem.service';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PluginsModule } from '../plugins/plugins.module';
import { MensagemComponent } from './mensagem/mensagem.component';
import { MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    PluginsModule,
    RouterModule
  ],
  entryComponents: [MensagemComponent],
  declarations: [HeaderComponent, MensagemComponent],
  providers: [MensagemService, { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }],
  exports: [HeaderComponent, MensagemComponent]
})
export class GeralModule { }
