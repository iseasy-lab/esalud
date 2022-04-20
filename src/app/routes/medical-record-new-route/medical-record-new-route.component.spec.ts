import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordNewRouteComponent } from './medical-record-new-route.component';

describe('MedicalRecordNewRouteComponent', () => {
  let component: MedicalRecordNewRouteComponent;
  let fixture: ComponentFixture<MedicalRecordNewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRecordNewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordNewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
