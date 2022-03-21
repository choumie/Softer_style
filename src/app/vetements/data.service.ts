/* eslint-disable @typescript-eslint/semi */
/* eslint-disable prefer-const */
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Vetement } from './vetement.model';
const VETEMENT_KEY = 'maListe';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  idMax = 0 ;
  vetement: Vetement[] = [];
   vet: Vetement[] = [
     {
        id:1,
        nom: 'Jean',
        prix: 10,
        taille: 10,
        lien: 'assets/img/1.jpg',
        complement:{
          statut: true,
          categorie: {sexe:'Homme'},
          couleur: 'vers',
        }


     },
     {
      id:2,
      nom: 'polo',
      prix: 10,
      taille: 10,
      lien: 'assets/img/2.jpg',
       complement:{
        statut: true,
        categorie: {sexe:'Homme'},
        couleur: 'vers',
      }

   },
   {
    id:3 ,
    nom: 'Jean',
    prix: 10,
    taille: 10,
    lien: 'assets/img/3.jpg',
    complement:{
      statut: true,
      categorie: { sexe:'Homme' },
      couleur: 'vers',
    }

 }
   ];


  constructor( private storage: Storage) {
    this.init();
   }


  init(): void
  {
    this.storage.create();

  }

  getVetements(): Promise <Vetement[]>
  {
    return this.storage.get(VETEMENT_KEY);
  }

   addVetement(vetement: Vetement): Promise <any>
   {
      return this.storage.get(VETEMENT_KEY).then((vetements: Vetement[]) =>{
          if(vetements){
            vetements.push(vetement);
            return this.storage.set(VETEMENT_KEY,vetements);
          }

          else{
            return this.storage.set(VETEMENT_KEY, [vetement]);
          }
      }).then(() => {this.reload()});
   }

   updateVetement(vetement: Vetement): Promise <any>
   {
     this.getVetements();
    return this.storage.get(VETEMENT_KEY).then((vetements: Vetement[]) =>{
      if(!vetements || vetements.length === 0){
        return null;
      }
      let newVetements: Vetement[] = [];

      for(let i of vetements)
      {
        if(i.id === vetement.id )
        {
          newVetements.push(vetement);
        }
        else{
          newVetements.push(i);
        }
      }
      return this.storage.set(VETEMENT_KEY, newVetements);

    }).then(() => {this.reload()});
   }

   deleteVetement(id: number): Promise <any>
   {
    return  this.storage.get(VETEMENT_KEY).then((vetements: Vetement[]) =>{
      if(!vetements || vetements.length === 0){
        return null;
      }
      let toKeep: Vetement[] = [];
      for(let i of vetements)
      {
        if(i.id !== id )
        {
          toKeep.push(i);
        }
      }
      return this.storage.set(VETEMENT_KEY, toKeep);

    }).then(() => {this.reload()});
   }

   getVetementById(id: number): Promise <Vetement>
   {
    return this.storage.get(VETEMENT_KEY).then((vetements: Vetement[]) =>{
      if(!vetements || vetements.length === 0){
        return null;
      }

      let toKeep: Vetement;

      for(let i of vetements)
      {
        if(i.id === id )
        {
          toKeep=i;
        }

      }
      return toKeep;

    });
   }



getId(): Promise <any>{

return this.storage.get(VETEMENT_KEY).then((vetements: Vetement[]) =>{
  let toKeep: Vetement;
      if(!vetements || vetements.length === 0){
        return toKeep;
      }
      for(let i of vetements)
      {
        if(i.id  >= this.idMax )
        {
          toKeep=i;
          this.idMax=i.id;
        }
      }
      return toKeep;

    });

}

reload(): void
{
  window.location.reload();

}

}
