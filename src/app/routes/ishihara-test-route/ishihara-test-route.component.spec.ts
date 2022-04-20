import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IshiharaTestRouteComponent } from './ishihara-test-route.component';

describe('IshiharaTestRouteComponent', () => {
  let component: IshiharaTestRouteComponent;
  let fixture: ComponentFixture<IshiharaTestRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IshiharaTestRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IshiharaTestRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
