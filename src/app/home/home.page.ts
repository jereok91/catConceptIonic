import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonCol,
  IonRow,
  IonImg,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCardSubtitle,
  IonLabel,
} from '@ionic/angular/standalone';

import { ApiService } from '../services/api.service';
import { RespontCatsI } from '../interface/respontCatsInterface';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonImg,
    IonRow,
    IonCol,
    IonGrid,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonLabel,
    NgFor
  ],
})
export class HomePage {
  cats: RespontCatsI[] = [];

  constructor(private readonly api: ApiService) {}

  ionViewWillEnter() {
    this.api.getCats().subscribe((cats: RespontCatsI[]) => {
      this.cats = cats;
    });
  }

  errorImagen (e:any){
    e.target.src = './assets/img/default.jpg';
  }
}
