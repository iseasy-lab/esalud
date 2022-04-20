import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordatorioRouteComponent } from './recordatorio-route.component';

describe('RecordatorioRouteComponent', () => {
  let component: RecordatorioRouteComponent;
  let fixture: ComponentFixture<RecordatorioRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordatorioRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordatorioRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
