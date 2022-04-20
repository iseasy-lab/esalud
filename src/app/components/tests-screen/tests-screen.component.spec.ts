import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestsScreenComponent } from './tests-screen.component';

describe('TestsScreenComponent', () => {
  let component: TestsScreenComponent;
  let fixture: ComponentFixture<TestsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
