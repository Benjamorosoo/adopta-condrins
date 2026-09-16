import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonTextarea, IonButton } from '@ionic/angular';
import { Perros } from '../services/perros';
import { Perro } from '../models/perro.model';

@Component({
  selector: 'app-nuevo-perro',
  templateUrl: './nuevo-perro.page.html',
  styleUrls: ['./nuevo-perro.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonItem, IonInput, IonTextarea, IonButton]
})
export class NuevoPerroPage {
  private perrosService = inject(Perros);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  idEditando: number | null = null;

  nombre = '';
  edad = 0;
  raza = '';
  descripcion = '';
  foto = '';

  constructor() {
    const idTexto = this.route.snapshot.paramMap.get('id');
    if (idTexto) {
      this.idEditando = Number(idTexto);
      const perro = this.perrosService.obtenerPorId(this.idEditando);
      if (perro) {
        this.nombre = perro.nombre;
        this.edad = perro.edad;
        this.raza = perro.raza;
        this.descripcion = perro.descripcion;
        this.foto = perro.foto;
      }
    }
  }

  guardar() {
    if (this.idEditando !== null) {
      // Modo edición
      const perroEditado: Perro = {
        id: this.idEditando,
        nombre: this.nombre,
        edad: this.edad,
        raza: this.raza,
        descripcion: this.descripcion,
        foto: this.foto,
        adoptado: this.perrosService.obtenerPorId(this.idEditando)?.adoptado ?? false,
      };
      this.perrosService.editar(perroEditado);
    } else {
      // Modo creación
      const nuevoPerro: Perro = {
        id: Date.now(),
        nombre: this.nombre,
        edad: this.edad,
        raza: this.raza,
        descripcion: this.descripcion,
        foto: this.foto,
        adoptado: false,
      };
      this.perrosService.agregar(nuevoPerro);
    }

    this.router.navigate(['/home']);
  }
}