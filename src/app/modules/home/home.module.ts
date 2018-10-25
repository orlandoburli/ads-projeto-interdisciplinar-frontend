import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule, MatMenuModule } from '@angular/material'
import { PluginsModule } from './../plugins/plugins.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    FlexLayoutModule,
    PluginsModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
