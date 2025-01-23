import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  constructor() { }

  ngOnInit() {
  }

  login(bodoque: NgForm) {
    /*console.log('email: ', this.email);
    console.log('password: ', this.password);*/
    //valua los datos
    console.log(bodoque.value);
    //verific que sea dato
    console.log('valid:', bodoque.valid);

    if (bodoque.invalid) {
      console.log("todos los campos son requeridos");
      return;
    }
   

    if(this.email === 'admin' && this.password === 'admin'){
      console.log("Login Aceptado");
    }else {
      console.log("Login no aceptado");
    }
  }

}
