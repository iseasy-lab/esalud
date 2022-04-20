import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationNewRouteComponent } from './consultation-new-route.component';

describe('ConsultationNewRouteComponent', () => {
  let component: ConsultationNewRouteComponent;
  let fixture: ComponentFixture<ConsultationNewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationNewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationNewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
