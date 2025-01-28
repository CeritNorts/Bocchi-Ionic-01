import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
  standalone: false,
})
export class RegistrarPage implements OnInit {
  Nombre: string = '';
  Apellido: string = '';
  Email: string = '';
  Contrasena: string = '';
  ConfirmarContrasena: string = '';

  constructor(
    private navController: NavController,
  ) {}

  ngOnInit() {}

  registro(eli: NgForm) {
    console.log('Formulario enviado:', eli.value);
    console.log('¿Formulario válido?:', eli.valid);

    // Verificar que todos los campos son requeridos
    if (eli.invalid) {
      console.error('Todos los campos son obligatorios');
      return;
    }

    if (this.Contrasena !== this.ConfirmarContrasena) {
      console.error('Las contraseñas no coinciden');
      return;
    }
    
    if (this.Nombre === 'Eliezer' && this.Apellido === 'Cerecedo' && this.Email === 'bocchi17@gmail.com' && this.Contrasena === 'Bocchi17' && this.ConfirmarContrasena === 'Bocchi17') {
      this.navController.navigateForward('/login');
    }else {
      console.error('Registro no aceptado');
    }
  }
}
