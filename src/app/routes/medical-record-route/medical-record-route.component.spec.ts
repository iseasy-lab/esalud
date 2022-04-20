import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordRouteComponent } from './medical-record-route.component';

describe('MedicalRecordRouteComponent', () => {
  let component: MedicalRecordRouteComponent;
  let fixture: ComponentFixture<MedicalRecordRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRecordRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
