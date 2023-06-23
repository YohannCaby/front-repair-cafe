import { Categorie } from "@/model/Categorie";
import { Objet } from "@/model/Objet";

const OBJETS = [
  new Objet(
    1,
    "cafetiere",
    new Date(2021, 12, 5),
    new Categorie(1, "ELECTROMENAGER"),
    "Nespresso",
    "plus de pression",
    1200
  ),
  new Objet(
    2,
    "Tablette",
    new Date(2021, 6, 5),
    new Categorie(2, "INFORMATIQUE"),
    "Samsung",
    "Port d'alimentation cassé",
    600
  ),
  new Objet(
    3,
    "Centrale vapeur",
    new Date(2020, 12, 5),
    new Categorie(1, "ELECTROMEANERGER"),
    "Electrolux",
    "vapeur par intermitence",
    4500
  ),
];
export function getObjetsByVisiteur(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        OBJETS.filter((objet) => {
          return objet.id % id == 0;
        })
      );
    }, 300);
  });
}
