import { Component } from '@angular/core';
import { Objeto } from './models/objeto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  objetoPadre: Objeto = new Objeto('Alberto', 'GDC');

  recogerInfo(objeto: Objeto) {
    console.log(objeto);
    this.objetoPadre = Object.assign({}, objeto);
  }
}
