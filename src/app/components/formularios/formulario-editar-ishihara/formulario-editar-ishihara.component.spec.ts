import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioEditarIshiharaComponent } from './formulario-editar-ishihara.component';

describe('FormularioEditarIshiharaComponent', () => {
  let component: FormularioEditarIshiharaComponent;
  let fixture: ComponentFixture<FormularioEditarIshiharaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioEditarIshiharaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioEditarIshiharaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
