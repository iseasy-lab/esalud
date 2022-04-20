import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IshiharaimageNewRouteComponent } from './ishiharaimage-new-route.component';

describe('IshiharaimageNewRouteComponent', () => {
  let component: IshiharaimageNewRouteComponent;
  let fixture: ComponentFixture<IshiharaimageNewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IshiharaimageNewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IshiharaimageNewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
