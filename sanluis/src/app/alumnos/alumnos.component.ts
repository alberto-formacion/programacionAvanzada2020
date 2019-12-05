import { Component, OnInit } from '@angular/core';
import { Alumno } from './alumnos';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  alumnos: Array<Alumno>;
  alumno: Alumno;

  constructor() { }

  ngOnInit() {
    this.alumnos = [];
    this.alumno = new Alumno('', '', '', '', []);
    console.log(this.alumno);
  }

  addAlumno() {
    console.log(this.alumno);
    this.alumnos.push(this.alumno);
    this.alumno = new Alumno('', '', '', '', []);
  }

}
