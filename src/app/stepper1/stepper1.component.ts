 
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper1',
  templateUrl: './stepper1.component.html',
  styleUrls: ['./stepper1.component.css']
})
export class Stepper1Component {
  public stepTwoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stepTwoForm = this.fb.group({
      city: this.fb.control(''),
      country: this.fb.control('')
    });
  }

  ngOnInit(): void {
  }

  stepTwoSubmit() {
  }
}

