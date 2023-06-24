<template>
  <div v-if="!isLoaded">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <v-card-text>
      <div class="font-weight-bold ms-1 mb-2 d-flex justify-start">
        Aujourd'hui
      </div>
      <v-timeline density="comfortable" align="center">
        <v-timeline-item
          v-for="objet in objets"
          :key="objet.id"
          size="medium"
          dot-color="orange-lighten-2"
          :width="getOptimumWidth"
        >
          <ObjetSheet :objet="objet" @modify="gotoObjet($event)"></ObjetSheet>
        </v-timeline-item>
      </v-timeline>
    </v-card-text>
  </div>
</template>
<script>
import { Objet } from "@/model/Objet";
import { Visiteur } from "@/model/Visiteur";
import { getObjetsByVisiteur } from "@/mock/mockObjet";
import _ from "lodash";
import { useContexteVisiteurStore } from "@/store/ContexteVisiteur";
import ObjetSheet from "./sheet/ObjetSheet.vue";

export default {
  name: "ListObjetsVisiteur",
  props: {
    visiteur: Visiteur,
  },
  components: {
    ObjetSheet,
  },
  data() {
    return {
      objets: [new Objet()],
      isLoaded: false,
      ctxVisiteur: useContexteVisiteurStore(),
    };
  },
  computed: {
    getOptimumWidth() {
      let width = (window.innerWidth / 3) * 0.7;
      console.log(width);
      return width;
    },
  },
  methods: {
    getObjets() {
      getObjetsByVisiteur(this.visiteur.id)
        .then((objets) => {
          this.objets = _.orderBy(objets, ["date"], ["desc"]);
        })
        .then(() => {
          this.isLoaded = true;
        });
    },
    gotoObjet(obj) {
      this.ctxVisiteur.defineCurrentObjet(obj);
      this.$router.push({ name: "objet" });
    },
  },
  mounted() {
    this.getObjets();
  },
};
</script>
