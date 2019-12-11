import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  usuarios: Array<User> = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      users => {
        console.log(users.results);
        users.results.forEach(usuario => {
          this.usuarios.push(new User(usuario.name.first,
            usuario.name.last,
            usuario.phone,
            usuario.picture,
            usuario.email,
            usuario.dob.date,
            usuario.nat));
        });
        console.log(this.usuarios);
      },
      error => console.log(error)
    );
  }
}
