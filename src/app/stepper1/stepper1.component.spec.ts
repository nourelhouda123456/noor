import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stepper1Component } from './stepper1.component';

describe('Stepper1Component', () => {
  let component: Stepper1Component;
  let fixture: ComponentFixture<Stepper1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stepper1Component]
    });
    fixture = TestBed.createComponent(Stepper1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
