import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { DebounceDirective } from './debounce/debounce.directive';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMomentDateModule, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatCardModule, MatButtonModule, MatIconModule, MatGridListModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatTableModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatDialogModule, MatSidenavModule, MatListModule, MatExpansionModule, MatDividerModule, MatDatepickerModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OrderPipe } from './orderBy/order-by.pipe';

import * as moment from 'moment';

moment.locale('pt-br');

export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatExpansionModule,
    MatDividerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
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
    MatExpansionModule,
    MatDividerModule,
    MatDatepickerModule,
    MatMomentDateModule,
    FlexLayoutModule,
    DebounceDirective,
    OrderPipe,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-br' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  declarations: [
    DebounceDirective,
    OrderPipe
  ]
})
export class PluginsModule { }