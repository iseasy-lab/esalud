import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCenterComponent } from './medical-center.component';

describe('MedicalCenterComponent', () => {
  let component: MedicalCenterComponent;
  let fixture: ComponentFixture<MedicalCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
