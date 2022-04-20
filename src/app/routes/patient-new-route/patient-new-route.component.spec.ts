import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNewRouteComponent } from './patient-new-route.component';

describe('PatientNewRouteComponent', () => {
  let component: PatientNewRouteComponent;
  let fixture: ComponentFixture<PatientNewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientNewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
