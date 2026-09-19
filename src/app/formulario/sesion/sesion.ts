import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-sesion',
  styleUrl: './sesion.less',
  templateUrl: './sesion.html',
})
export class Sesion {
  inputUsuario: string = ''
  inputPassword: string = ''
  mensaje: string = ''

  usuarioX = 'admin'
  passwordX = 'utl2026'

  iniciarSesion(): void {
    let isUsuario = false;
    let isPassword = false;

    if (this.inputUsuario !== this.usuarioX) {
      if (this.inputPassword !== this.passwordX) {
        this.mensaje = 'El nombre de usuario y contraseña no es válido';
      }
      else {
        this.mensaje = 'La contraseña no es válida';
      }
    }
    else {
      this.mensaje = 'El nombre de usuario no es válido';
    }

    if (this.inputUsuario == this.usuarioX) {
      if (this.inputPassword == this.passwordX) {
        this.mensaje = 'Bienvenido al sistema: ' + this.usuarioX;
      }
    }
  }
}
