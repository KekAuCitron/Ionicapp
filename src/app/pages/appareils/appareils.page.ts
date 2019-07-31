import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { DataService } from '../../services/data.service';
import { SingleAppareilPage } from './single-appareil/single-appareil.page';
import { Appareil } from '../../models/Appareil';
import { AppareilsService } from '../../services/appareils.service';

@Component({
  selector: 'app-appareils',
  templateUrl: 'appareils.page.html',
  styleUrls: ['appareils.page.scss'],
})
export class AppareilsPage {

  appareilsList: Appareil[];

  constructor(private router: Router, private dataService: DataService, private modalController: ModalController, private appareilsService: AppareilsService) {}

  /*
  openAppareilWithService(appareil) {
    this.dataService.setData(appareil.name, appareil)
    this.router.navigateByUrl('/single-appareil/'+appareil.name);
  }*/

  ionViewWillEnter() {
    this.appareilsList = this.appareilsService.appareilsList;
  }

  async presentModal(index: number) {
    const modal = await this.modalController.create({
      component: SingleAppareilPage,
      componentProps: {'index': index}
    });
    return await modal.present();
  }

}
