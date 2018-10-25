import { AppRoutingModule } from './app-routing.module';
import { PluginsModule } from './modules/plugins/plugins.module';
import { CadastrosModule } from './modules/cadastros/cadastros.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';

import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MatMenuModule,
    MatToolbarModule,
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    PluginsModule,
    HomeModule,
    CadastrosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }