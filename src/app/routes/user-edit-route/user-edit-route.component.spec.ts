import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditRouteComponent } from './user-edit-route.component';

describe('UserEditRouteComponent', () => {
  let component: UserEditRouteComponent;
  let fixture: ComponentFixture<UserEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
