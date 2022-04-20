import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearConsultaComponent } from './formulario-crear-consulta.component';

describe('FormularioCrearConsultaComponent', () => {
  let component: FormularioCrearConsultaComponent;
  let fixture: ComponentFixture<FormularioCrearConsultaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCrearConsultaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
