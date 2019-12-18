import { Injectable } from '@angular/core';
import { Equipo } from '../equipos/equipo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:8080/equipos';
  }

  getEquipos(): Observable<Array<Equipo>> {
    return this.http.get<Array<Equipo>>(this.url);
  }

  addEquipo(equipo: Equipo): Observable<Equipo> {
    return this.http.post<Equipo>(this.url, equipo);
  }
}
