import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Visita } from './visita/visita.model'; // <-- import this
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prenotazioni';
  visite: Visita[];
  data: Object;
  loading: boolean;
  oVisita: Observable<Visita[]>;
  postVisita: Observable<Object>;
  tempVisita: Visita;

  constructor(public http:HttpClient){
    this.visite = new Array<Visita>();
    this.oVisita = this.http.get<Visita[]>('https://my-json-server.typicode.com/Lucas2000s/InformaticaMilazzo/prenotazioni');
    this.oVisita.subscribe(this.ricevidati);
  }

  ricevidati = (data) => {
   this.visite = data; //Se non ci fossero metodi, basterebbe fare così
  }
}
