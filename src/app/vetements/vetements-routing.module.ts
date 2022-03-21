import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VetementsPage } from './vetements.page';

const routes: Routes = [
  {
    path: '',
    component: VetementsPage
  },
  {
    path: 'vetement-details/:id',
    loadChildren: () => import('./vetement-details/vetement-details.module').then( m => m.VetementDetailsPageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'update-vet/:id',
    loadChildren: () => import('./update-vet/update-vet.module').then( m => m.UpdateVetPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VetementsPageRoutingModule {}
