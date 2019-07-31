import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async onToggleLights() {
    const alert = await this.alertCtrl.create({
      header: 'Êtes-vous certain(e) de vouloir continuer ?',
      subHeader: 'Cette action allumera ou éteindra toutes les lumières de la maison !',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Confirmer',
          handler: () => console.log('Confirmé !')
        }
      ]
    });
    await alert.present();
  }

}
