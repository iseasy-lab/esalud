import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IshiharaimageViewRouteComponent } from './ishiharaimage-view-route.component';

describe('IshiharaimageViewRouteComponent', () => {
  let component: IshiharaimageViewRouteComponent;
  let fixture: ComponentFixture<IshiharaimageViewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IshiharaimageViewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IshiharaimageViewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
