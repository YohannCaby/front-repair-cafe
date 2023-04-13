import { Reparation } from "@/model/Reparation";
import _ from "lodash";
import { BENEVOLES } from "./mockBenevole";

export const REPARATIONS=[
    {reparation: new Reparation(1,BENEVOLES[0],'VA REVENIR',30,'Il semble que pour réparer votre cafetière, vous aurez besoin d\'acheter une pièce manquante. Il est important de noter que sans cette pièce, il pourrait être difficile de remettre en état votre appareil. Nous vous recommandons donc de vous procurer cette pièce manquante afin de pouvoir réparer votre cafetière et la remettre en marche.',new Date(2021,3,3)),objet: 1},
    {reparation: new Reparation(1,BENEVOLES[0],'REPARE',30,'C\'est formidable d\'apprendre que vous avez remplacé la pièce manquante de votre cafetière et qu\'elle fonctionne à nouveau correctement ! Il est important de veiller à ce que votre appareil soit toujours en bon état de fonctionnement, car une cafetière en bon état peut vous offrir une tasse de café chaude et savoureuse chaque matin. Profitez bien de votre cafetière réparée !',new Date(2021,4,6)),objet: 1},
    {reparation: new Reparation(1,BENEVOLES[0],'CONSEILLE',30,'Conseillé de changer l\'appareil',new Date(2021,5,6)),objet: 3}
]

export function getListeReparationByObjet(objetId){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            let reparations=[];
            _.forEach(REPARATIONS, (o)=>{
                if (o.objet === objetId){
                    reparations.push(o.reparation);
                }
            })
            resolve(reparations)
        },300)
    })
}