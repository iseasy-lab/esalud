import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarnsworthTestComponent } from './farnsworth-test.component';

describe('FarnsworthTestComponent', () => {
  let component: FarnsworthTestComponent;
  let fixture: ComponentFixture<FarnsworthTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarnsworthTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarnsworthTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
