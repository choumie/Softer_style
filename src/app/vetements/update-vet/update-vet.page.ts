import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DataService } from '../data.service';
import { Vetement } from '../vetement.model';

@Component({
  selector: 'app-update-vet',
  templateUrl: './update-vet.page.html',
  styleUrls: ['./update-vet.page.scss'],
})
export class UpdateVetPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  error = false;
  nom: string;
  id=0;
  vetement: Vetement;

  constructor(private dataService: DataService,
    private navCtl: NavController,private formBuilder: FormBuilder,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param =>
      {
        this.id=+param.get('id');
      });
    this.ionicForm = this.formBuilder.group({
      nom: [[], [Validators.required]],
      prix: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      taille: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      lien: ['', [Validators.required]],
      couleur: ['', [Validators.required]],
      sexe: ['', [Validators.required]],

    });
    this.getVetement();
  }

   // eslint-disable-next-line @typescript-eslint/member-ordering
   get errorControl() {
    return this.ionicForm.controls;
  }


  updateVetement() {
    this.isSubmitted = true;
    if (this.ionicForm.valid) {
      const vetement: Vetement ={
        id: this.id,
        nom: this.ionicForm.get('nom')?.value,
        prix: this.ionicForm.get('prix')?.value,
        taille: this.ionicForm.get('taille')?.value,
        lien: this.ionicForm.get('lien')?.value,
        complement:{
         statut: this.getStatut(this.ionicForm.get('prix')?.value),
         categorie:
         {sexe: this.ionicForm.get('sexe')?.value,},
         couleur: this.ionicForm.get('couleur')?.value,
        }
      };
      this.dataService.updateVetement(vetement);
      this.navCtl.navigateRoot('');
    }

    else {
          this.error = true;
    }
  }

  getStatut(solde: number): boolean{
    if(solde<=10)
    {
      return true;
    }
    else {return false;}
  }

  getVetement(): void
  {
    console.log(this.id);
    this.dataService.getVetementById(this.id).then(tokeep =>{
      this.vetement=tokeep;
      this.ionicForm.get('nom').setValue(this.vetement.nom);
      this.ionicForm.get('prix').setValue(this.vetement.prix);
      this.ionicForm.get('taille').setValue(this.vetement.taille);
      this.ionicForm.get('lien').setValue(this.vetement.lien);
      this.ionicForm.get('couleur').setValue(this.vetement.complement.couleur);
      this.ionicForm.get('sexe').setValue(this.vetement.complement.categorie.sexe);
    });

  }
}
