import { MoreInfo } from './moreInfo.model';

export interface Vetement
{
    id: number;
    nom: string;
    prix: number;
    taille: number;
    lien: string;
    complement: MoreInfo;


}
