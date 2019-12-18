import { Jugador } from './../jugadores/jugador';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscadorJugador'
})
export class BuscadorJugadorPipe implements PipeTransform {

  transform(jugadores: Array<Jugador>, jugadorBuscar: string): Array<Jugador> {
    if (jugadorBuscar && jugadorBuscar !== '') {
      return jugadores.filter(jugador => jugador.nombre.toLowerCase().indexOf(jugadorBuscar.toLowerCase()) !== -1);
    } else {
      return jugadores;
    }
  }

}
