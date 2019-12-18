import { EquipoService } from './../services/equipo.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.component.html',
  styleUrls: ['./lista-equipo.component.css']
})
export class ListaEquipoComponent implements OnInit {

  equipos: Array<Equipo> = [];
  @Output() evtEmitter: EventEmitter<Equipo> = new EventEmitter<Equipo>();

  constructor(private equipoService: EquipoService) { }

  ngOnInit() {
    this.equipoService.getEquipos().subscribe(resultado => this.equipos = resultado);
  }

  modificarEstilos(equipo: Equipo) {
    const clases = {'list-group-item-warning': equipo.fundacion < 1900};

    return clases;
  }

  mostrarInfoEquipo(equipo: Equipo) {
    this.evtEmitter.emit(equipo);
  }

}
