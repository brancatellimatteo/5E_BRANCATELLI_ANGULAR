import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'complete-calc';
    r: number;
    num_vett : number[];
    somma(n1: HTMLInputElement, n2: HTMLInputElement) :Boolean {
        this.r = Number(n1.value) + Number(n2.value);

        this.fillVect(Number(n1.value), Number(n2.value));
        return false;
    }

    fillVect(n1: number, n2:number)
    {
        //Se n2< n1 li scambio
        if (n1<n2) {
            let a = n2;
            n2 = n1;
            n2= a;
        }
        this.num_vett = new Array<number>();
        for(let i = n1; i <=n2; i++)
        {
            console.log(i);
            this.num_vett.push(i);
        }
    }

}
