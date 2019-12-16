import { Usuario } from './usuario';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formUsuario: FormGroup;
   constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formUsuario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      edad: [18, [Validators.required, Validators.min(18)]]
    });
  }

  submit() {
    console.log(this.formUsuario.value);
    const u: Usuario = this.formUsuario.value;
    console.log(u);
  }

}
