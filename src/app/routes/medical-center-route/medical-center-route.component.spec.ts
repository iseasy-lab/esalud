import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCenterRouteComponent } from './medical-center-route.component';

describe('MedicalCenterRouteComponent', () => {
  let component: MedicalCenterRouteComponent;
  let fixture: ComponentFixture<MedicalCenterRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalCenterRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCenterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
