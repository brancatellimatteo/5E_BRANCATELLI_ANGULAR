import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ris',
  templateUrl: './ris.component.html',
  styleUrls: ['./ris.component.css']
})
export class RisComponent implements OnInit {

  @Input() ris : number;
  @Input() n_vet : number[];
  constructor() { }

  ngOnInit() {
  }



}
