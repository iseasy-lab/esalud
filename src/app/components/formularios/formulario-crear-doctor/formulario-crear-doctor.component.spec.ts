import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearDoctorComponent } from './formulario-crear-doctor.component';

describe('FormularioCrearDoctorComponent', () => {
  let component: FormularioCrearDoctorComponent;
  let fixture: ComponentFixture<FormularioCrearDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCrearDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
