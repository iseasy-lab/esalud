import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileViewRouteComponent } from './profile-view-route.component';

describe('ProfileViewRouteComponent', () => {
  let component: ProfileViewRouteComponent;
  let fixture: ComponentFixture<ProfileViewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileViewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileViewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
