import { Categorie } from "./Categorie";

export class Benevole {
  id;
  nom;
  prenom;
  specialites = [Categorie];
  constructor(id, nom, prenom, specialites) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.specialites = specialites;
  }
}
