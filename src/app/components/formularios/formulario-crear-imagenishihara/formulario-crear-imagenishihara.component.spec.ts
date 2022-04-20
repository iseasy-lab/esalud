import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioCrearImagenishiharaComponent } from './formulario-crear-imagenishihara.component';

describe('FormularioCrearImagenishiharaComponent', () => {
  let component: FormularioCrearImagenishiharaComponent;
  let fixture: ComponentFixture<FormularioCrearImagenishiharaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioCrearImagenishiharaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioCrearImagenishiharaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
