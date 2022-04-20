import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IshiharaTestComponent } from './ishihara-test.component';

describe('IshiharaTestComponent', () => {
  let component: IshiharaTestComponent;
  let fixture: ComponentFixture<IshiharaTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IshiharaTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IshiharaTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
