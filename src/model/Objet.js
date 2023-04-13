import { Categorie } from "./Categorie";
import { Reparation } from "./Reparation";
export class Objet {
    id;
    nom;
    date_creation;
    categorie=Categorie;
    marque_modele;
    panne;
    poids;
    reparations=[Reparation];
    constructor(id,nom,date_creation,categorie,marque_modele,panne,poids,reparations){
        this.id=id;
        this.nom=nom;
        this.date_creation=date_creation;
        this.categorie=categorie;
        this.marque_modele=marque_modele;
        this.panne=panne;
        this.poids=poids;
        this.reparations=reparations;
    }
}