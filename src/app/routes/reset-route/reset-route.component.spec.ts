import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetRouteComponent } from './reset-route.component';

describe('ResetRouteComponent', () => {
  let component: ResetRouteComponent;
  let fixture: ComponentFixture<ResetRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
