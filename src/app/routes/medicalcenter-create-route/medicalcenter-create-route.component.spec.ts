import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalcenterCreateRouteComponent } from './medicalcenter-create-route.component';

describe('MedicalcenterCreateRouteComponent', () => {
  let component: MedicalcenterCreateRouteComponent;
  let fixture: ComponentFixture<MedicalcenterCreateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalcenterCreateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalcenterCreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
