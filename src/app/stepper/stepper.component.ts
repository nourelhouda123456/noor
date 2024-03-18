import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  public stepOneForm: FormGroup;
  public showInputField: boolean = false;


  constructor(private fb: FormBuilder) {
    this.stepOneForm = this.fb.group({
      MatriculeFiscal: this.fb.control('', Validators.required),
      EtatTerritoire: this.fb.control('', Validators.required),
      RaisonSociale: this.fb.control('', Validators.required),
      PDC: this.fb.control('', Validators.required),
      PDD: this.fb.control('', Validators.required),
      autresInput: this.fb.control('' ),
      qualiteEntreprise: this.fb.control('', Validators.required)
    });
  }

  ngOnInit(): void {
    // Subscribe to changes in the dropdown value
    this.stepOneForm.get('qualiteEntreprise')?.valueChanges.subscribe(value => {
      // If value is "Autres", show the input field and set it as required; otherwise, hide it and clear its validators
      if (value === 'Autres') {
        this.showInputField = true;
        this.stepOneForm.get('autresInput')?.setValidators([Validators.required]);
      } else {
        this.showInputField = false;
        this.stepOneForm.get('autresInput')?.clearValidators();
      }
      // Update the validity of the input field
      this.stepOneForm.get('autresInput')?.updateValueAndValidity();
    });
  }
  
    
    
    
   
  
  










  stepOneSubmit() {
  }
}