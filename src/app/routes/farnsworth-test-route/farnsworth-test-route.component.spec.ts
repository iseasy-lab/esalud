import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarnsworthTestRouteComponent } from './farnsworth-test-route.component';

describe('FarnsworthTestRouteComponent', () => {
  let component: FarnsworthTestRouteComponent;
  let fixture: ComponentFixture<FarnsworthTestRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarnsworthTestRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarnsworthTestRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
