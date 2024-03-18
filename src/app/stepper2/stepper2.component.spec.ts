import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Stepper2Component } from './stepper2.component';

describe('Stepper2Component', () => {
  let component: Stepper2Component;
  let fixture: ComponentFixture<Stepper2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Stepper2Component]
    });
    fixture = TestBed.createComponent(Stepper2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
