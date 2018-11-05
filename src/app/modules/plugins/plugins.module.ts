import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { DebounceDirective } from './debounce/debounce.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule, MatButton, MatButtonModule, MatIconModule, MatGridListModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatDialogModule, MatSidenavModule, MatListModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDialogModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    DebounceDirective,
    BrowserAnimationsModule
  ],
  declarations: [
    DebounceDirective
  ]
})
export class PluginsModule { }