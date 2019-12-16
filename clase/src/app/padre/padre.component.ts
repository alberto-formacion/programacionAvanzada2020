import { Objeto } from './../objeto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  objetoDelPadre: Objeto;

  constructor() { }

  ngOnInit() {
    this.objetoDelPadre = new Objeto('aaa', 'bbb');
  }

}
