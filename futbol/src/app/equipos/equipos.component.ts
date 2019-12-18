import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EquipoService } from '../services/equipo.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  equipoSeleccionado: Equipo;
  equipoBuscar: string;
  formularioEquipos: FormGroup;

  constructor(private formBuilder: FormBuilder, private equipoService: EquipoService) {}

  ngOnInit() {
    this.formularioEquipos = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      fundacion: [0, [Validators.required]],
      socios: [0, [Validators.required]],
      penas: [0, [Validators.required]],
      imagen: ['https://cdn.icon-icons.com/icons2/1637/PNG/256/athletic-bilbao_109476.png', [Validators.required]]
    });

  }

  addEquipo(equipo: Equipo) {
    this.equipoService.addEquipo(equipo).subscribe(resultado => {});

    this.formularioEquipos.reset();
  }

  guardarEquipo() {
    const equipo = new Equipo(
      0,
      this.formularioEquipos.controls.nombre.value,
      this.formularioEquipos.controls.ciudad.value,
      this.formularioEquipos.controls.fundacion.value,
      this.formularioEquipos.controls.socios.value,
      this.formularioEquipos.controls.penas.value,
      this.formularioEquipos.controls.imagen.value
    );

    this.addEquipo(equipo);
  }

  recogerEquipo(equipo: Equipo) {
    console.log(equipo);
    this.equipoSeleccionado = equipo;
  }
}
