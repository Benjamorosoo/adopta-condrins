import { Component, Input } from '@angular/core';
import { Perro } from '../../models/perro.model';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular';


@Component({
  selector: 'app-tarjeta-perro',
  templateUrl: './tarjeta-perro.component.html',
  styleUrls: ['./tarjeta-perro.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class TarjetaPerroComponent {
  @Input() perro!: Perro;

}
