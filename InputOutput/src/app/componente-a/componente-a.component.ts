import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Objeto } from '../models/objeto';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.css']
})
export class ComponenteAComponent implements OnInit {

  @Output() evtEmmiter: EventEmitter<Objeto> = new EventEmitter<Objeto>();
  obj: Objeto;

  constructor() { }

  ngOnInit() {
    this.obj = new Objeto('', '');
  }

  enviarInfo() {
    this.evtEmmiter.emit(this.obj);
  }

}
