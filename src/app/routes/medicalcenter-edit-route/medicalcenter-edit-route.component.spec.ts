import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalcenterEditRouteComponent } from './medicalcenter-edit-route.component';

describe('MedicalcenterEditRouteComponent', () => {
  let component: MedicalcenterEditRouteComponent;
  let fixture: ComponentFixture<MedicalcenterEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalcenterEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalcenterEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
