import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorCreateRouteComponent } from './doctor-create-route.component';

describe('DoctorCreateRouteComponent', () => {
  let component: DoctorCreateRouteComponent;
  let fixture: ComponentFixture<DoctorCreateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorCreateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorCreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
