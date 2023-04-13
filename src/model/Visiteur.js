import { Adhesion } from "./Adhesion";
import { Objet } from "./Objet";
export class Visiteur {
    id;
    nom;
    prenom;
    naissance;
    commune;
    telephone;
    email;
    genre;
    adhesions=[Adhesion];
    objets=[Objet];
    constructor(id,nom,prenom,naissance,commune,telephone,email,genre,adhesions){
        this.id=id;
        this.nom=nom;
        this.prenom=prenom;
        this.naissance=naissance;
        this.commune=commune;
        this.telephone=telephone;
        this.email=email;
        this.genre=genre;
        this.adhesions=adhesions;
    }
}