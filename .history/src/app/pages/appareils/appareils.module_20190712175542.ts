import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppareilsPage } from './appareils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BrowserModule,
    RouterModule.forChild([
      {
        path: '',
        component: AppareilsPage
      }
    ])
  ],
  declarations: [AppareilsPage]
})
export class AppareilsPageModule {}
