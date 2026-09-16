import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton } from '@ionic/angular';
import { Usuarios } from '../services/usuarios';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButton]
})
export class RegistroPage {
  private usuariosService = inject(Usuarios);
  private router = inject(Router);

  correo = '';
  clave = '';
  mensajeError = '';

  registrar() {
    const exito = this.usuariosService.registrar({ correo: this.correo, clave: this.clave });

    if (exito) {
      this.router.navigate(['/login']);
    } else {
      this.mensajeError = 'Ese correo ya está registrado.';
    }
  }

  irALogin() {
    this.router.navigate(['/login']);
  }
}