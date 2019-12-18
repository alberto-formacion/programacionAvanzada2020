import { Jugador } from './../jugadores/jugador';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalle-jugador',
  templateUrl: './detalle-jugador.component.html',
  styleUrls: ['./detalle-jugador.component.css']
})
export class DetalleJugadorComponent implements OnInit {

  @Input() jugador: Jugador;

  constructor() { }

  ngOnInit() {
  }

}
