import { Benevole } from "./Benevole";
export class Reparation {
  id;
  benevole = Benevole;
  etat;
  duree;
  commentaire;
  date;
  constructor(id, benevole, etat, duree, commentaire, date) {
    this.id = id;
    this.benevole = benevole;
    this.etat = etat;
    this.duree = duree;
    this.commentaire = commentaire;
    this.date = date;
  }
}
