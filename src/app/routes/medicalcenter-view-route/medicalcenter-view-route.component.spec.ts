import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalcenterViewRouteComponent } from './medicalcenter-view-route.component';

describe('MedicalcenterViewRouteComponent', () => {
  let component: MedicalcenterViewRouteComponent;
  let fixture: ComponentFixture<MedicalcenterViewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalcenterViewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalcenterViewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
