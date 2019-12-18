import { Jugador } from './../jugadores/jugador';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-lista-jugador',
  templateUrl: './lista-jugador.component.html',
  styleUrls: ['./lista-jugador.component.css']
})
export class ListaJugadorComponent implements OnInit {

  @Output() evtEmitter: EventEmitter<Jugador> = new EventEmitter<Jugador>();
  @Input() jugadores: Array<Jugador>;
  jugadorBuscar: string;

  constructor() { }

  ngOnInit() {
    this.jugadorBuscar = '';
  }

  mostrarInfoJugador(jugador: Jugador) {
    this.evtEmitter.emit(jugador);
  }

}
