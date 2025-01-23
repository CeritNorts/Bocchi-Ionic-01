import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit{

  constructor() {}

  ngOnInit(){
    console.log('Mi segundo culiacanazo');
    let numero = 0;
    numero = 9;
    numero = 4;
    numero = numero * 3;
    numero = numero + 4;

    console.log('Asi le dijeron a mi hermana y ahora estoy lleno de sobrino');
    console.log(numero);
    console.log('Hola chavito');
    console.log('SI PA');
    console.log('Saquenme de venezuela');
    console.log('Emma Murio de hambre');
  }

}
