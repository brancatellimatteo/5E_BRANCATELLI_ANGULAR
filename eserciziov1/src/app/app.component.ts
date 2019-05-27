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

  vegs = Verdure;

  constructor() {
  }

  ngOnInit(){
  }

  onClick(nome: HTMLInputElement, descr:HTMLInputElement, prezzo:HTMLInputElement): boolean {
    let veg: Verdura = new Verdura();
    veg.nome = nome.value;
    veg.descrizione = descr.value;
    veg.prezzo = prezzo.value;
    if(veg.nome == '' || veg.descrizione == '' || veg.prezzo == ''){
      alert('Inserisci i valori, la verdura non verrà inserita');
    }else{
      this.vegs.push(veg);
    }
    return false;
  }
}
