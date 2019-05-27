import { Component, OnInit, Input } from '@angular/core';
import { Verdura } from '../dvegetables.model';

@Component({
  selector: 'app-vegetables-list',
  templateUrl: './vegetables-list.component.html',
  styleUrls: ['./vegetables-list.component.css']
})
export class VegetablesListComponent implements OnInit {

  @Input() verdure;
  selectedVeg: Verdura;

  constructor() { }

  onSelect(verdura: Verdura): void {
    this.selectedVeg = verdura;
  }

  dettaglioVerdura(verdura: Verdura): void{
    console.log("Nome: " + verdura.nome);
    console.log("Descrizione: " + verdura.descrizione);
    console.log(verdura.prezzo);
  }

  ngOnInit() {
  }

}
