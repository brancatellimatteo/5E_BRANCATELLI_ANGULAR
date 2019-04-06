import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatore';
  tot: number = 0;

  onSum(n: HTMLInputElement): boolean{
    this.tot += Number(n.value);
    return false;
  }
  onSub(n: HTMLInputElement): boolean{
    this.tot -= Number(n.value);
    return false;
  }
}
