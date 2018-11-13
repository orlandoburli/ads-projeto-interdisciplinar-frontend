import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoConsultaComponent } from './curso-consulta.component';

describe('CursoConsultaComponent', () => {
  let component: CursoConsultaComponent;
  let fixture: ComponentFixture<CursoConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
