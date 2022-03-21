import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VetementDetailsPage } from './vetement-details.page';

const routes: Routes = [
  {
    path: '',
    component: VetementDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetementDetailsPageRoutingModule {}
