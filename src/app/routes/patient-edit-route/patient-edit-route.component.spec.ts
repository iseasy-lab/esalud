import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientEditRouteComponent } from './patient-edit-route.component';

describe('PatientEditRouteComponent', () => {
  let component: PatientEditRouteComponent;
  let fixture: ComponentFixture<PatientEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
