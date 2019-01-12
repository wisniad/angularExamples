import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Komponent3Component } from './komponent3.component';

describe('Komponent3Component', () => {
  let component: Komponent3Component;
  let fixture: ComponentFixture<Komponent3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Komponent3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Komponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
