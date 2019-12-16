import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit () {
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      edad: [0, [Validators.required, Validators.min(18)]]
    });

    console.log(this.formulario);
  }

  submit() {
    console.log(this.formulario);
  }
}
