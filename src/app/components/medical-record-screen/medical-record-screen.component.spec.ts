import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalRecordScreenComponent } from './medical-record-screen.component';

describe('MedicalRecordScreenComponent', () => {
  let component: MedicalRecordScreenComponent;
  let fixture: ComponentFixture<MedicalRecordScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalRecordScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalRecordScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
