import { defineStore } from "pinia";

export const useContexteVisiteurStore = defineStore("ContexteVisiteur", {
  state: () => ({
    currentVisiteur: null,
    currentObjet: null,
    hasVisiteurChanged: null,
  }),
  getter: {
    getCurrentVisiteur: (state) => {
      state.currentVisiteur;
    },
    getCurrentObjet: (state) => {
      state.currentObjet;
    },
    getHasVisiteurChanged: (state) => {
      state.hasVisiteurChanged;
    },
  },
  actions: {
    defineCurrentVisiteur(visiteur) {
      console.log("set pinia store : defineCurrentVisiteur => ", visiteur);
      this.$patch((state) => {
        state.currentVisiteur = visiteur;
      });
    },
    defineCurrentObjet(objet) {
      console.log("set pinia store : defineCurrentObjet => ", objet);
      this.$patch((state) => {
        state.currentObjet = objet;
      });
    },
    addNouvelleAdhesion(adhesion) {
      console.log("Ajout nouvelle adhesion :addNouvelleAdhesion => ", adhesion);
      this.$patch((state) => {
        state.currentVisiteur.adhesions.push(adhesion);
      });
    },
    defineHasVisiteurChanged(val) {
      this.$patch((state) => {
        state.hasVisiteurChanged = val;
      });
    },
    $reset() {
      this.currentVisiteur = null;
      this.currentObjet = null;
      this.hasVisiteurChanged = null;
      console.log(
        "Reset ContextVisiteur. currentVisiteur: ",
        this.currentVisiteur,
        " currentObjet: ",
        this.currentObjet,
        "hasVisiteurChanged :",
        this.hasVisiteurChanged
      );
    },
  },
});
