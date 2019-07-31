import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';

import { Appareil } from '../../../models/Appareil';
import { AppareilsService } from '../../../services/appareils.service';


@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.page.html',
  styleUrls: ['./single-appareil.page.scss'],
})
export class SingleAppareilPage implements OnInit {

  @Input() index: number;

  appareil: Appareil;

  constructor(private route: ActivatedRoute, private router: Router, public navParams: NavParams, modalCtrl: ModalController, public appareilsService: AppareilsService) { }

  ngOnInit() {
    /*
    if(this.route.snapshot.data['appareil']) {
      this.appareil = this.route.snapshot.data['appareil']
    } else {
      this.appareil.name = 'Vide';
      this.appareil.description = ['Vide'];
    }*/

    this.index = this.navParams.get('index');
    this.appareil = this.appareilsService.appareilsList[this.index];
  }

  dismissModal() {
    modalController.dismiss();
  }

  onToggleAppareil() {
    this.appareil.isOn = !this.appareil.isOn;
  }

}
