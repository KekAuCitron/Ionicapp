import { Component } from '@angular/core';

@Component({
  selector: 'app-appareils',
  templateUrl: 'appareils.page.html',
  styleUrls: ['appareils.page.scss'],
})
export class AppareilsPage {

    appareilsList = [
        {
            name: 'Machine à laver',
            description: [
                'Volume: 6 litres',
                'Temps de lavage: 2 heures',
                'Consommation: 173 kWh/an'
              ]
        },
        {
            name: 'Télévision'
        },
        {
            name: 'Ordinateur'
        }
    ];

  constructor() {}

}
