import { Objeto } from './../objeto';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() objetoEnElhijo: Objeto;
  @Output() evtEmitter: EventEmitter<Objeto> = new EventEmitter<Objeto>();

  constructor() { }

  ngOnInit() {
  }

  enviarInfo() {
    this.evtEmitter.emit(new Objeto('Este Objeto viene del hijo', 'de verdad!!'));
  }

}
