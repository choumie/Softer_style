import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVetPage } from './update-vet.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVetPageRoutingModule {}
