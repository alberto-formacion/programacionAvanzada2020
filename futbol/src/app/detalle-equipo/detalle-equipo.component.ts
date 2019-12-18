import { Component, OnInit, Input } from '@angular/core';
import { Equipo } from '../equipos/equipo';

@Component({
  selector: 'app-detalle-equipo',
  templateUrl: './detalle-equipo.component.html',
  styleUrls: ['./detalle-equipo.component.css']
})
export class DetalleEquipoComponent implements OnInit {

  @Input() equipo: Equipo;

  constructor() { }

  ngOnInit() {
  }

}
