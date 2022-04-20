import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question2RouteComponent } from './question2-route.component';

describe('Question2RouteComponent', () => {
  let component: Question2RouteComponent;
  let fixture: ComponentFixture<Question2RouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question2RouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question2RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
