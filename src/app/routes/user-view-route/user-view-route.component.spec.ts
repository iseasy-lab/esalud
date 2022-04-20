import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserViewRouteComponent } from './user-view-route.component';

describe('UserViewRouteComponent', () => {
  let component: UserViewRouteComponent;
  let fixture: ComponentFixture<UserViewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserViewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserViewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
