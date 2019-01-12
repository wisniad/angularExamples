import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Komponent1Component } from './komponent1.component';

describe('Komponent1Component', () => {
  let component: Komponent1Component;
  let fixture: ComponentFixture<Komponent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Komponent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Komponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
