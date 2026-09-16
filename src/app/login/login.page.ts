import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton } from '@ionic/angular';
import { Usuarios } from '../services/usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton]
})
export class LoginPage {
  private usuariosService = inject(Usuarios);
  private router = inject(Router);

  correo = '';
  clave = '';
  mensajeError = '';

  ingresar() {
    const exito = this.usuariosService.login(this.correo, this.clave);

    if (exito) {
      this.router.navigate(['/home']);
    } else {
      this.mensajeError = 'Correo o contraseña incorrectos.';
    }
  }

  irARegistro() {
    this.router.navigate(['/registro']);
  }
}