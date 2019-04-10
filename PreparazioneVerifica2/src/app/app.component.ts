import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  extractedNumber: number;
  arrayNumbers: number[];

  constructor() {
    this.arrayNumbers = [];
  }

  ngOnInit() {
  }

  estrai(numeroString: HTMLInputElement): void {
    let numeroInt = Number(numeroString.value);

    if (numeroInt !== this.extractedNumber && !isNaN(numeroInt)) {
      this.extractedNumber = numeroInt;
      this.arrayNumbers.push(numeroInt);
    }
  }
}
