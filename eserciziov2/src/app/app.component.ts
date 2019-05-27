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

  myForm: FormGroup;
  vehicles = Mezzi;

  constructor(fb: FormBuilder) {
    this.myForm = fb.group({'type': ['type', Validators.required], 'descr': ['descr', Validators.required], 'price': ['price', Validators.required], 'val': ['val', Validators.required]
    });
  }

  ngOnInit(){
  }

  onSubmit(value: string): void {

    let vehicle: Mezzo = new Mezzo();
    vehicle.tipo = this.myForm.controls['type'].value;
    vehicle.descrizione = this.myForm.controls['descr'].value;
    vehicle.tariffa = this.myForm.controls['price'].value;
    vehicle.valutazioneMedia = Number(this.myForm.controls['val'].value);

    this.vehicles.push(vehicle);
  }
}