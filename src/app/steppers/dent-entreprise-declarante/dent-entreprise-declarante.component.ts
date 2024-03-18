import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface User {
  name: string;
}
@Component({
  selector: 'app-dent-entreprise-declarante',
  templateUrl: './dent-entreprise-declarante.component.html',
  styleUrls: ['./dent-entreprise-declarante.component.css']
})
export class DentEntrepriseDeclaranteComponent  implements OnInit {
 


   
    myControl = new FormControl<string | User>('');
    options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
    filteredOptions: Observable<User[]> | undefined;
  
    ngOnInit() {
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.options.slice();
        }),
      );
    }
  
    displayFn(user: User): string {
      return user && user.name ? user.name : '';
    }
  
    private _filter(name: string): User[] {
      const filterValue = name.toLowerCase();
  
      return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }
  
    trackByFn(index: number, item: any): any {
      return item.id; // Change `id` to the unique identifier property of your `option` object
    }



  public stepOneForm: FormGroup;
  public showInputField: boolean = false;


  constructor(private fb: FormBuilder) {
    this.stepOneForm = this.fb.group({
      Nationalite: this.fb.control('', Validators.required),
      FormeJuridique: this.fb.control('', Validators.required),
      RaisonSociale: this.fb.control('', Validators.required),
      AdresseSiegeSocial: this.fb.control('', Validators.required),
      CodePostal: this.fb.control('', Validators.required),
      ChiffreAffaireAnnuel: this.fb.control('' ),
      ActivitePrincipale: this.fb.control('', Validators.required)
    });
  }

  
  
    
    
    
   
  
  










  stepOneSubmit() {
  }
}