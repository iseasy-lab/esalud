import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileEditRouteComponent } from './profile-edit-route.component';

describe('ProfileEditRouteComponent', () => {
  let component: ProfileEditRouteComponent;
  let fixture: ComponentFixture<ProfileEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
