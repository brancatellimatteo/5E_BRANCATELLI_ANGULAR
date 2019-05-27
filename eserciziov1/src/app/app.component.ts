import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Verdura } from './dvegetables.model';
import { Verdure } from './mock-veg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  myForm: FormGroup;
  vegs = Verdure;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'name': ['name', Validators.required], 'descr': ['descr', Validators.required], 'price': ['price', Validators.required]
    });
  }

  ngOnInit(){
  }

  onSubmit(value: string): void {

    let veg: Verdura = new Verdura();
    veg.nome = this.myForm.controls['name'].value;
    veg.descrizione = this.myForm.controls['descr'].value;
    veg.prezzo = this.myForm.controls['price'].value;
    if(veg.nome == 'name' || veg.descrizione == 'descr' || veg.prezzo == 'price'){
      alert('Cambia i valori, la verdura non verrà inserita');
    }else{
      this.vegs.push(veg);
    }
  }
}
