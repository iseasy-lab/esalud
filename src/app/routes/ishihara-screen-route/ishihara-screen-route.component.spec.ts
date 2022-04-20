import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IshiharaScreenRouteComponent } from './ishihara-screen-route.component';

describe('IshiharaScreenRouteComponent', () => {
  let component: IshiharaScreenRouteComponent;
  let fixture: ComponentFixture<IshiharaScreenRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IshiharaScreenRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IshiharaScreenRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
