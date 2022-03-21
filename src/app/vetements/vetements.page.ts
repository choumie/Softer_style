/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { NavController, Platform, ToastController } from '@ionic/angular';
import { DataService } from './data.service';
import { Vetement } from './vetement.model';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.page.html',
  styleUrls: ['./vetements.page.scss'],
})
export class VetementsPage implements OnInit {
  vetementss: Vetement[]=[];
  vetements: Vetement[]=[];

  constructor(private dataService: DataService, private plt: Platform, private toastController: ToastController,
    private navCtrl: NavController)
   {
    this.load();
    // this.plt.ready().then(() => {this.load();});
    }

  ngOnInit(): void {
    this.dataService.getVetements();
    this.load();

  }

  ngOnChange(): void {
    this.load();
  }

  load(): void
  {
    this.dataService.getVetements().then(vetements =>{
      this.vetements=vetements;
    });
  }

  goTo(id: number): void
  {
    this.navCtrl.navigateForward(`/vetements/vetement-details/${id}`);
  }
}
