import { Alerte } from "@/model/Alerte";
import { useContexteAlerteStore } from "@/store/ContexteAlerte";

export function showAlerte(level,message){
    let alerte = new Alerte(level,message)
    let ctxAlerte = useContexteAlerteStore();
    ctxAlerte.showAlerte(alerte);
}