import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IshiharaimageEditRouteComponent } from './ishiharaimage-edit-route.component';

describe('IshiharaimageEditRouteComponent', () => {
  let component: IshiharaimageEditRouteComponent;
  let fixture: ComponentFixture<IshiharaimageEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IshiharaimageEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IshiharaimageEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
