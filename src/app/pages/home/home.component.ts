import { Component } from '@angular/core';
import { User } from 'src/app/classes/User/user';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: User = {
    usuario: "teste",
    senha: "",
  }
  constructor(private router: Router) { }
  OnInit() {

  }

}
