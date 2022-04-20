import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IshiharaScreenComponent } from './ishihara-screen.component';

describe('IshiharaScreenComponent', () => {
  let component: IshiharaScreenComponent;
  let fixture: ComponentFixture<IshiharaScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IshiharaScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IshiharaScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
