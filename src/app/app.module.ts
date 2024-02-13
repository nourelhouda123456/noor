import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StepperComponent } from './stepper/stepper.component';

 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

 
import { MatInputModule } from '@angular/material/input';
import { NbThemeModule } from '@nebular/theme';
import { NbCardModule,NbStepperModule  } from '@nebular/theme';
import { Stepper1Component } from './stepper1/stepper1.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
 
 

@NgModule({
  declarations: [
    AppComponent,
    StepperComponent,
    Stepper1Component
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
    NbStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
