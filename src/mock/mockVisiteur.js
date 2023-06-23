import { Adhesion } from "@/model/Adhesion";
import { Visiteur } from "@/model/Visiteur";

const VISITEURS = [
  new Visiteur(
    1,
    "CABY",
    "Yohann",
    1987,
    "LA CHAPELLE THOUARAULT",
    "0672820035",
    "yohann.caby@gmail.com",
    "homme",
    [new Adhesion(new Date(2020, 9, 14)), new Adhesion(new Date(2022, 9, 6))]
  ),
  new Visiteur(2, "ALTHAUS", "Charlotte", 0, "RENNES", null, null, "femme", [
    new Adhesion(new Date(2019, 9, 15)),
    new Adhesion(new Date(2020, 9, 15)),
  ]),
];

export function getVisitorByNom(nom) {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          VISITEURS.find((visiteur) => {
            return visiteur.nom === nom;
          })
        ),
      300
    );
  });
}

export function findVisitor(val) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        VISITEURS.filter((visiteur) => {
          return (
            visiteur.nom.toUpperCase().includes(val.toUpperCase()) ||
            visiteur.prenom.toUpperCase().includes(val.toUpperCase())
          );
        })
      );
    }, 300);
  });
}
