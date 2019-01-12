import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Komponent2Component } from './komponent2.component';

describe('Komponent2Component', () => {
  let component: Komponent2Component;
  let fixture: ComponentFixture<Komponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Komponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Komponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
