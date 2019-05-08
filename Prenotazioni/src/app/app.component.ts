import { Component } from '@angular/core';
import { Prenotazione } from './prenotazione/prenotazione.model'; // <-- import this
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      data: Object;
   loading: boolean;
   o :Observable<Object>;
  prenotazioni:Prenotazione[];   // <-- component property

  prenotazioneDettagliare:Prenotazione;
  

  dettagliare(prenotazioneCliccata:Prenotazione){

  this.prenotazioneDettagliare = prenotazioneCliccata;

  }
   

  constructor(public http: HttpClient){
      this.makeRequest();
    /*this.articles = [
      new Article('Angular 2', 'ciao a tutti', 3 , 2),
      new Article('Fullstack', 'ciao a tutti belli', 2 , 1),
      new Article('Angular Homepage', 'ciao a tutti bellissimi', 1 , 5),
    ];*/


  }


prenota(nome: HTMLInputElement, cognome: HTMLInputElement , indirizzo:HTMLInputElement  , telefono: HTMLInputElement, email: HTMLInputElement, data: HTMLInputElement , ora: HTMLInputElement): boolean {

  var found = false;
for(var i = 0; i < this.prenotazioni.length; i++) {
    if ((this.prenotazioni[i].Data == data.value) && (this.prenotazioni[i].Ora == ora.value)) {
        found = true;
        break;
    }
   
}

if (found != true){


    this.prenotazioni.push(new Prenotazione(nome.value, cognome.value, indirizzo.value , telefono.value , email.value , data.value , ora.value));


}else{


alert("Posto non disponibile");


}




   
    nome.value = '';
    cognome.value = '';
    indirizzo.value = '';
    telefono.value= '';
    email.value= '';
    data.value= '';
    ora.value= '';
    return false;
  }




makeRequest(): void {
     console.log("here");
     this.loading = true;
     this.o = this.http.get<Prenotazione[]>('https://my-json-server.typicode.com/Lucas2000s/InformaticaMilazzo/prenotazioni');
     this.o.subscribe(this.getData);
   }
   getData = (d : Prenotazione[]) =>
   {
     this.data = new Object(d);
     this.prenotazioni = d;
     this.loading = false;
     console.log(this.prenotazioni);
   }
}