import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { ServicesAppService } from './services-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'NotificationPush';
  readonly VAPID_PUBLIC_KEY = "BDeiIze-ySzURzW38H6tX5Kuuci70hM04pJCiaF_Gk_S8OMw5IBEi11ZQsEa5m87oO_ZsMnDVkPbml-jtUDeg3I";
  public respuesta : any


  constructor( private swPush : SwPush, private services: ServicesAppService){

  }

  SubscribeToNotifications(){
    this.swPush.requestSubscription(
      {
        serverPublicKey : this.VAPID_PUBLIC_KEY   // LLave para permisos para el navegador con la llave pública
      }
    )
    .then(respuesta =>{
      this.respuesta = respuesta
    })
    .catch(err =>{
      this.respuesta = err
    })
  }


  Enviar(){
    this.services.Enviar();
  }
}
