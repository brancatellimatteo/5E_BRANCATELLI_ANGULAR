import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mezzo } from './driving.model';
import { Mezzi } from './mock-driving';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  vehicles = Mezzi;

  constructor() {
  }

  ngOnInit(){
  }

 onClick(tipo: HTMLInputElement, descr:HTMLInputElement, tariffa:HTMLInputElement, valutazioneMedia:HTMLInputElement): boolean {

    let vehicle: Mezzo = new Mezzo();

    vehicle.tipo = tipo.value;
    vehicle.descrizione = descr.value;
    vehicle.tariffa = tariffa.value;
    vehicle.valutazioneMedia = Number(valutazioneMedia.value);
    if(vehicle.tipo == '' || vehicle.descrizione == '' || vehicle.tariffa == ''){
      alert('Inserisci i valori, il mezzo non verrà inserito');
    }else{
      this.vehicles.push(vehicle);
    }

    return false;
  }
}