import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VetementDetailsPageRoutingModule } from './vetement-details-routing.module';

import { VetementDetailsPage } from './vetement-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VetementDetailsPageRoutingModule
  ],
  declarations: [VetementDetailsPage]
})
export class VetementDetailsPageModule {}
