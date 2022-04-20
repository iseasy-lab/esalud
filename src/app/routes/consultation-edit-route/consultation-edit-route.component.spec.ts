import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationEditRouteComponent } from './consultation-edit-route.component';

describe('ConsultationEditRouteComponent', () => {
  let component: ConsultationEditRouteComponent;
  let fixture: ComponentFixture<ConsultationEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
