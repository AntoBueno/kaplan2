import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { VerpsicologiaPage } from './verpsicologia';

const routes: Routes = [
  {
    path: '',
    component: VerpsicologiaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerpsicologiaPage]
})
export class VerpsicologiaPageModule {}
