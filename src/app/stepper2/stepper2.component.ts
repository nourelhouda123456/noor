import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper2',
  templateUrl: './stepper2.component.html',
  styleUrls: ['./stepper2.component.css']
})
export class Stepper2Component {
  public stepThreeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.stepThreeForm = this.fb.group({
      city: this.fb.control(''),
      country: this.fb.control('')
    });
  }

  ngOnInit(): void {
  }

  stepThreeSubmit() {
  }
}

