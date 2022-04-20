import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorRouteComponent } from './doctor-route.component';

describe('DoctorRouteComponent', () => {
  let component: DoctorRouteComponent;
  let fixture: ComponentFixture<DoctorRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
