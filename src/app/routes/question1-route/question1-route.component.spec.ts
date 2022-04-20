import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Question1RouteComponent } from './question1-route.component';

describe('Question1RouteComponent', () => {
  let component: Question1RouteComponent;
  let fixture: ComponentFixture<Question1RouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question1RouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question1RouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
