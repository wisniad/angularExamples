import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Movies2Component } from './movies2.component';

describe('Movies2Component', () => {
  let component: Movies2Component;
  let fixture: ComponentFixture<Movies2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Movies2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Movies2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
