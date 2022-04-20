import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorViewRouteComponent } from './doctor-view-route.component';

describe('DoctorViewRouteComponent', () => {
  let component: DoctorViewRouteComponent;
  let fixture: ComponentFixture<DoctorViewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorViewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorViewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
