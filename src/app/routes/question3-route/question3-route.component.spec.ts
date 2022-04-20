import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question3RouteComponent } from './question3-route.component';

describe('Question3RouteComponent', () => {
  let component: Question3RouteComponent;
  let fixture: ComponentFixture<Question3RouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question3RouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question3RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
