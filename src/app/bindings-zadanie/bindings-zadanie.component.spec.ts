import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsZadanieComponent } from './bindings-zadanie.component';

describe('BindingsZadanieComponent', () => {
  let component: BindingsZadanieComponent;
  let fixture: ComponentFixture<BindingsZadanieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BindingsZadanieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingsZadanieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
