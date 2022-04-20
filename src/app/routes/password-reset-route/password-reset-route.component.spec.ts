import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordResetRouteComponent } from './password-reset-route.component';

describe('PasswordResetRouteComponent', () => {
  let component: PasswordResetRouteComponent;
  let fixture: ComponentFixture<PasswordResetRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordResetRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordResetRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
