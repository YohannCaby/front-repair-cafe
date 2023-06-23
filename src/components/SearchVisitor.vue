<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-autocomplete
            label="Recherche visiteur"
            :loading="isLoading"
            :items="visiteurItems"
            v-model="selectedVisiteur"
            @update:search="searchingVisiteur($event)"
            @click:clear="clearSearch()"
            clearable
          >
          </v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
import { findVisitor } from "@/mock/mockVisiteur";
import { useContexteVisiteurStore } from "@/store/ContexteVisiteur.js";
export default {
  name: "SearchVisitor",
  data() {
    return {
      visiteurItems: [],
      visiteurMap: new Map(),
      selectedVisiteur: null,
      isLoading: false,
      ctxVisiteur: useContexteVisiteurStore(),
    };
  },
  methods: {
    searchingVisiteur(val) {
      let self = this;
      if (!this.isLoading && val.length >= 3) {
        console.log("searchingVisiteur method for : ", val);
        this.visiteurItems = [];
        this.isLoading = true;
        findVisitor(val)
          .then((visiteurs) => {
            visiteurs.forEach((vis) => {
              let key = vis.nom + " " + vis.prenom;
              self.visiteurItems.push(key);
              self.visiteurMap.set(key, vis);
            });
          })
          .then(() => (this.isLoading = false));
      }
    },
    clearSearch() {
      this.ctxVisiteur.$reset();
      this.visiteurItems = [];
      this.visiteurMap = new Map();
    },
  },
  watch: {
    selectedVisiteur: function fnSelectedVisiteur(visiteur) {
      if (visiteur !== undefined && typeof visiteur == "string") {
        this.ctxVisiteur.$reset();
        console.log(visiteur + " : ", this.visiteurMap.get(visiteur));
        this.ctxVisiteur.defineCurrentVisiteur(this.visiteurMap.get(visiteur));
        this.visiteurItems = [];
        this.visiteurMap = new Map();
        this.$router.push({ name: "dashboard-visiteur" });
      }
    },
  },
};
</script>
