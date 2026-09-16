import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, AlertController } from '@ionic/angular';
import { Perros } from '../services/perros';
import { Perro } from '../models/perro.model';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule]
})
export class DetallePage {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private perrosService = inject(Perros);
  private alertController = inject(AlertController);

  perro: Perro | undefined;

  constructor() {
    const idTexto = this.route.snapshot.paramMap.get('id');
    const id = Number(idTexto);
    this.perro = this.perrosService.obtenerPorId(id);
  }

  irAEditar() {
    if (this.perro) {
      this.router.navigate(['/editar-perro', this.perro.id]);
    }
  }

  marcarAdoptado() {
    if (this.perro) {
      const perroActualizado: Perro = { ...this.perro, adoptado: true };
      this.perrosService.editar(perroActualizado);
      this.perro = perroActualizado;
    }
  }

  async confirmarEliminar() {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: `¿Seguro que quieres eliminar a ${this.perro?.nombre}?`,
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            if (this.perro) {
              this.perrosService.eliminar(this.perro.id);
              this.router.navigate(['/home']);
            }
          },
        },
      ],
    });
    await alert.present();

    
  }
}