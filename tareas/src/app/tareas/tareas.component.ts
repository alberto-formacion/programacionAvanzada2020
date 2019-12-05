import { Component, OnInit } from '@angular/core';
import { Tarea } from './tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;
  task: Tarea;

  constructor() { }

  ngOnInit() {
    this.tareas = [];
    this.task = new Tarea('');
    /*this.tareas.push(new Tarea('Sacar al perro'));
    this.tareas.push(new Tarea('Tirar la basura'));
    this.tareas.push(new Tarea('Hacer la compra'));
    this.tareas.push(new Tarea('Hacer la cena'));*/
  }

  anadirTarea() {
    this.tareas.push(this.task);
    this.task = new Tarea('');
  }

}
