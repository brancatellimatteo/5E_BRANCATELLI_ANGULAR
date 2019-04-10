import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PreparazioneVerifica1';
  result: number;
  num_vett:number[];

  somma(n1: HTMLInputElement, n2: HTMLInputElement): boolean{
    this.result = Number(n1.value) + Number(n2.value);
    this.fill_vett(Number(n1.value), Number(n2.value));
    return false;
  }

  fill_vett(n1: number, n2: number){
    //se n2 < n1 li scambio
    if(n2 < n1){
      let a = n2;
      n2 = n1;
      n1 = a;
    }
    this.num_vett = new Array<number>();
    for(let i = n1; i <=n2; i++){
      console.log(i);
      this.num_vett.push(i);
    }
  }
}
