/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, AlertOptions, NavController, ToastController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Vetement } from '../vetement.model';

@Component({
  selector: 'app-vetement-details',
  templateUrl: './vetement-details.page.html',
  styleUrls: ['./vetement-details.page.scss'],
})
export class VetementDetailsPage implements OnInit {
  vetement: Vetement;
  id: number;
  prix: number;
  nom: string;
  lien: string;
  taille: number;
  statut: boolean;
  categorie: string;
  couleur: string;

  constructor(private route: ActivatedRoute,
    private dataService: DataService,
    private navCtrl: NavController,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param =>
      {
        this.id=+param.get('id');
        this.getVetement(this.id);
        console.log('pourquoi');
      });
  }

  getVetement(id: number): void {
    this.dataService.getVetementById(id).then(tokeep =>{
      console.log(tokeep);
      this.vetement=tokeep;
      this.taille=this.vetement.taille;
      this.lien=this.vetement.lien;
      this.nom=tokeep.nom;
      this.id=this.vetement.id;
      this.prix=this.vetement.prix;
      this.statut=this.vetement.complement.statut;
      this.couleur=this.vetement.complement.couleur;
      this.categorie=this.vetement.complement.categorie.sexe;
    });

}

  async remove(id: number): Promise<void>{
  let options = await this.alertCtrl.create( {
      header: 'Attention!',
      subHeader: 'Voulez réélement supprimer',
      buttons: [
        {
          text: 'Annuler',
          role: 'Cancel'
        },
        {
          text: 'Supprimer',
          handler:() => {
            this.dataService.deleteVetement(id);
            this.navCtrl.navigateForward(`vetements`);
          }
        }
      ]
  });

  options.present();
}

goTo(id: number): void
{
  this.navCtrl.navigateForward(`/vetements/update-vet/${id}`);
}

}
