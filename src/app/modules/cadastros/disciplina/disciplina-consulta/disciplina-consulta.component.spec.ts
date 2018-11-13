import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaConsultaComponent } from './disciplina-consulta.component';

describe('DisciplinaConsultaComponent', () => {
  let component: DisciplinaConsultaComponent;
  let fixture: ComponentFixture<DisciplinaConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisciplinaConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisciplinaConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
