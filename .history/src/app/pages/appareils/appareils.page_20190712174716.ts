import { Component } from '@angular/core';

@Component({
  selector: 'app-appareils',
  templateUrl: 'appareils.page.html',
  styleUrls: ['appareils.page.scss'],
})
export class AppareilsPage {

    appareilsList = [
        {
            name: 'Machine à laver'
        },
        {
            name: 'Télévision'
        },
        {
            name: 'Ordinateur'
        }
    ]

  constructor() {}

}
