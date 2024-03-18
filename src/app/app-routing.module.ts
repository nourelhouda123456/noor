import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepperComponent } from './stepper/stepper.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormComponent } from './form/form.component';
import { DentEntrepriseDeclaranteComponent } from './steppers/dent-entreprise-declarante/dent-entreprise-declarante.component';

const routes: Routes = [
 
  {path: '', component: SignUpComponent},
  {path: 'SignIn', component: SignInComponent},
  {path: 'form', component:  FormComponent},
  {path: 'ident', component:   DentEntrepriseDeclaranteComponent},
  {path :'**', component: SignUpComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
