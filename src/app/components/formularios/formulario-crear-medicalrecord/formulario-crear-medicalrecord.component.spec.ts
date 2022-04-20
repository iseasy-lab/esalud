import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearMedicalrecordComponent } from './formulario-crear-medicalrecord.component';

describe('FormularioCrearMedicalrecordComponent', () => {
  let component: FormularioCrearMedicalrecordComponent;
  let fixture: ComponentFixture<FormularioCrearMedicalrecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCrearMedicalrecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearMedicalrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
