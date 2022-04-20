import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorEditRouteComponent } from './doctor-edit-route.component';

describe('DoctorEditRouteComponent', () => {
  let component: DoctorEditRouteComponent;
  let fixture: ComponentFixture<DoctorEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
