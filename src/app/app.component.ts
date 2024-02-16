import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonList, IonLabel, IonContent } from '@ionic/angular/standalone';
import { HeaderComponent } from './componets/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonContent, IonLabel, IonList, IonApp, IonRouterOutlet, HeaderComponent, HttpClientModule, RouterModule],
})
export class AppComponent {
  constructor(private readonly router: Router , public readonly activatedRoute: ActivatedRoute,) {
    // observer para capturar propiedades del router  cada que cambie
    this.router.events.subscribe((event) => {
      console.log('event', event);
    });

    // recuperar el title de router.title 
    
  }

  public title = 'app';

}
