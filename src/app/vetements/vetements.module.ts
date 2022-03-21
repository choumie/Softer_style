import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VetementsPageRoutingModule } from './vetements-routing.module';

import { VetementsPage } from './vetements.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VetementsPageRoutingModule
  ],
  declarations: [VetementsPage]
})
export class VetementsPageModule {}
