import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearPacienteComponent } from './formulario-crear-paciente.component';

describe('FormularioCrearPacienteComponent', () => {
  let component: FormularioCrearPacienteComponent;
  let fixture: ComponentFixture<FormularioCrearPacienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCrearPacienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
