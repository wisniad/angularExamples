import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesServiceComponent } from './movies-service.component';

describe('MoviesServiceComponent', () => {
  let component: MoviesServiceComponent;
  let fixture: ComponentFixture<MoviesServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
