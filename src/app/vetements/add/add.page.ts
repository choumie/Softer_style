/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Vetement } from '../vetement.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  ionicForm: FormGroup;
  isSubmitted = false;
  error = false;

  nom: string;
  id=0;
  vetement: Vetement;

  constructor(private dataService: DataService, private formBuilder: FormBuilder,private navCtl: NavController) { }

  ngOnInit() {
    this.getId();
    this.ionicForm = this.formBuilder.group({
      nom: [[], [Validators.required]],
      prix: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      taille: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      lien: ['', [Validators.required]],
      couleur: ['', [Validators.required]],
      sexe: ['', [Validators.required]],

    });
  }



  // eslint-disable-next-line @typescript-eslint/member-ordering
  get errorControl() {
    return this.ionicForm.controls;
  }

  addVetement() {
    this.getId();
    this.isSubmitted = true;
    if (this.ionicForm.valid) {
      const vetement: Vetement ={
        id: this.getId(),
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
      this.dataService.addVetement(vetement);
      //this.previousState();
      this.navCtl.navigateRoot('');
    }

    else {
          this.error = true;
    }
  }

 previousState(): void
 {
    window.history.back();
 }


 getId(): number{
  this.dataService.getId().then(toKeep =>{
    this.vetement= toKeep;
    this.id= this.vetement.id+1;
  });
  if(this.id===0) {return this.id=1;}
  else {return this.id;}
 }

 getStatut(solde: number): boolean{
   if(solde<=10)
   {
     return true;
   }
   else {return false;}
 }
}
