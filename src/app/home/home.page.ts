import { Component, signal, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput,
  IonSegment, IonSegmentButton, IonLabel, IonFooter, IonGrid, IonRow, IonCol, IonFab, 
  IonFabButton, IonIcon, IonButton } from '@ionic/angular';
import { Perros } from '../services/perros';
import { TarjetaPerroComponent } from '../components/tarjeta-perro/tarjeta-perro.component';
import { addIcons } from 'ionicons';
import { add } from 'ionicons/icons';

addIcons({ add });


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, 
    FormsModule, IonItem, IonInput, IonSegment, IonSegmentButton, IonLabel, IonFooter, 
    TarjetaPerroComponent, IonGrid, IonRow, IonCol, IonFab, IonFabButton, IonIcon, IonButton],
})
export class HomePage {

  private perrosService = inject(Perros);
  private router = inject(Router);
  perros = signal(this.perrosService.listar());

  nombre = signal("");
  filtro = signal("inicio");

  irADetalle(id: number){
    this.router.navigate(['/detalle', id]);
  }



  cambiarFiltro(evento: Event){
    const segmento = evento.target as HTMLIonSegmentElement;
    this.filtro.set(String(segmento.value ?? 'inicio')); 
  //Su único trabajo es agarrar el nuevo valor seleccionado y guardarlo en el signal filtro
  //solo se ocupa si la variable tiene la funcion signal()
  }

  irNuevoPerro(){
    this.router.navigate(['/nuevo-perro']);
  }

  ionViewWillEnter() {
    console.log('4. Entrando a home, refrescando lista');
    this.perros.set(this.perrosService.listar());
    console.log('5. Lista en home ahora:', this.perros());
  }
}
