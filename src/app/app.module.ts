import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

 
import { MatInputModule } from '@angular/material/input';
import { NbThemeModule } from '@nebular/theme';
import { NbCardModule,NbStepperModule  } from '@nebular/theme';
import { Stepper1Component } from './stepper1/stepper1.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { Stepper2Component } from './stepper2/stepper2.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormComponent } from './form/form.component';
import { DentEntrepriseDeclaranteComponent } from './steppers/dent-entreprise-declarante/dent-entreprise-declarante.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
 
 

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    Stepper1Component,
    Stepper2Component,
    SignUpComponent,
    SignInComponent,
    FormComponent,
    DentEntrepriseDeclaranteComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    NbThemeModule.forRoot(),
    NbCardModule,
    NbStepperModule,
    MatStepperModule,
    CdkStepperModule,
    NbStepperModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    HttpClientModule,
    AsyncPipe, 
   ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
