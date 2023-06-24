<template>
  <div v-if="!isLoaded">
    <v-progress-circular indeterminate color="primary"></v-progress-circular>
  </div>
  <div v-else>
    <div v-if="reparations.length > 0">
      <v-card-text>
        <div class="font-weight-bold ms-1 mb-2 d-flex justify-start">
          Aujourd'hui
        </div>
        <v-timeline density="comfortable" align="center">
          <v-timeline-item
            v-for="reparation in reparations"
            :key="reparation.id"
            size="medium"
            dot-color="orange-lighten-2"
            :width="getOptimumWidth"
          >
            <ReparationSheet :reparation="reparation"></ReparationSheet>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </div>
    <div v-else>
      <v-card-text class="text-h6">Pas de réparations présentes</v-card-text>
    </div>
  </div>
</template>
<script>
import { Objet } from "@/model/Objet";
import { getListeReparationByObjet } from "@/mock/mockReparation";
import { Reparation } from "@/model/Reparation";
import _ from "lodash";
import ReparationSheet from "@/components/sheet/ReparationSheet.vue";
export default {
  name: "ListReparationObjet",
  props: {
    objet: Objet,
  },
  components: {
    ReparationSheet,
  },
  data() {
    return {
      reparations: [new Reparation()],
      isLoaded: false,
    };
  },
  computed: {
    getOptimumWidth() {
      let width = (window.innerWidth / 2) * 0.7;
      console.log(width);
      return width;
    },
  },
  methods: {
    getListReparation() {
      getListeReparationByObjet(this.objet.id)
        .then((res) => {
          this.reparations = _.orderBy(res, ["date"], ["desc"]);
        })
        .then(() => (this.isLoaded = true));
    },
  },
  mounted() {
    this.getListReparation();
  },
};
</script>
