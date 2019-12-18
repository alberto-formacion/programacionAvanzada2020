import { JugadorService } from './../services/jugador.service';
import { Component, OnInit, Input } from '@angular/core';
import { Equipo } from '../equipos/equipo';
import { Jugador } from '../jugadores/jugador';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  jugadores: Array<Jugador> = [];
  jugadorSeleccionado: Jugador;

  constructor(private jugadorService: JugadorService) { }

  ngOnInit() {
  }

  recogerEquipo(equipo: Equipo) {
    this.jugadorService.getJugadoresByEquipo(equipo).subscribe(resultado => this.jugadores = resultado);
  }

  recogerJugador(jugador: Jugador) {
    this.jugadorSeleccionado = jugador;
  }

}
