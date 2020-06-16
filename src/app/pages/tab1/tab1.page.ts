import { Component } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { Lista } from 'src/app/models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public deseosService: DeseosService,
               private router: Router,
               public alertCtl: AlertController ) {  }

  async agregarLista() {

    const alert = await this.alertCtl.create({
      cssClass: 'my-custom-class',
      header: 'Nueva Lista',
      inputs: [
        {
          name : 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);

            if ( data.titulo.length === 0 ){
              return;
            }
            if ( data.titulo.length >= 0 ){
              const listaId = this.deseosService.crearLista( data.titulo );
              this.router.navigateByUrl(`/tabs/tab1/agregar/${ listaId }`);
            }
          }
        }
      ]
    });

    await alert.present();

  }

  listaSeleccionada( lista: Lista){

    console.log(lista);

    if ( lista ){
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id }`);
    } else {
      console.log('Nada chulls esto no es id en lo absoluto');
    }
  }
}
