import { Component } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projet';

  stepOneForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.stepOneForm = this.formBuilder.group({
      // Définir les champs et les validateurs ici
    });
  }
}

