import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordEditRouteComponent } from './medical-record-edit-route.component';

describe('MedicalRecordEditRouteComponent', () => {
  let component: MedicalRecordEditRouteComponent;
  let fixture: ComponentFixture<MedicalRecordEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRecordEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
