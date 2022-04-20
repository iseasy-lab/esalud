import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationViewRouteComponent } from './consultation-view-route.component';

describe('ConsultationViewRouteComponent', () => {
  let component: ConsultationViewRouteComponent;
  let fixture: ComponentFixture<ConsultationViewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationViewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationViewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
