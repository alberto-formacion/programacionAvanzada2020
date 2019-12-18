import { Injectable } from '@angular/core';
import { Jugador } from '../jugadores/jugador';
import { Equipo } from '../equipos/equipo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/jugadores';
  }

  getJugadores(): Observable<Array<Jugador>> {
    return this.http.get<Array<Jugador>>(this.url);
  }

  getJugadoresByEquipo(equipo: Equipo): Observable<Array<Jugador>> {
    console.log(equipo);
    console.log(this.url + '/equipo/' + equipo.id);
    return this.http.get<Array<Jugador>>(this.url + '/equipo/' + equipo.id);
  }
}
