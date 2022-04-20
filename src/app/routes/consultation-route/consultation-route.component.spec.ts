import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationRouteComponent } from './consultation-route.component';

describe('ConsultationRouteComponent', () => {
  let component: ConsultationRouteComponent;
  let fixture: ComponentFixture<ConsultationRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
