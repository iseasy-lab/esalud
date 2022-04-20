import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientViewRouteComponent } from './patient-view-route.component';

describe('PatientViewRouteComponent', () => {
  let component: PatientViewRouteComponent;
  let fixture: ComponentFixture<PatientViewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientViewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientViewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
