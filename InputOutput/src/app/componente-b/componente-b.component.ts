import { Objeto } from './../models/objeto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.css']
})
export class ComponenteBComponent implements OnInit {

  @Input() objetoHijo: Objeto;

  constructor() { }

  ngOnInit() {
  }

}
