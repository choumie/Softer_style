import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVetPageRoutingModule } from './update-vet-routing.module';

import { UpdateVetPage } from './update-vet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateVetPageRoutingModule
  ],
  declarations: [UpdateVetPage]
})
export class UpdateVetPageModule {}
