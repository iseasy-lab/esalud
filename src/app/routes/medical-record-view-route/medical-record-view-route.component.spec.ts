import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordViewRouteComponent } from './medical-record-view-route.component';

describe('MedicalRecordViewRouteComponent', () => {
  let component: MedicalRecordViewRouteComponent;
  let fixture: ComponentFixture<MedicalRecordViewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRecordViewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordViewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
